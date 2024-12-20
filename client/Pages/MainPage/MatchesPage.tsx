import { useState } from 'react'
import { MatchBubble } from '../../../models/matches'
import ChatBubble from '../../components/MessageBoard/ChatBubble'
import useGetMatches from '../../hooks/useGetMatches'
import { useAuth0 } from '@auth0/auth0-react'
import ChatBox from '../../components/MessageBoard/ChatBox'
import BasketButtons from '../../components/MessageBoard/BasketButtons'
import ErrorPage from '../../components/ErrorPage'
import useUpdateNotifications from '../../hooks/useUpdateNotifications'

function MatchesPage() {
  const { data, isLoading, isError } = useGetMatches()
  const { user } = useAuth0()
  const updateNotifications = useUpdateNotifications()

  // selectMatch, which will change when a button in ChatBubble is clicked
  const [selectMatch, setSelectMatch] = useState({
    matchesId: 0,
    otherUsername: '',
    basketId: 0,
  })

  const handleClick = async ({
    matchId,
    otherUsername,
    basketId,
  }: {
    matchId: number
    otherUsername: string
    basketId: number
  }) => {
    setSelectMatch(() => {
      return {
        matchesId: matchId,
        otherUsername: otherUsername,
        basketId: basketId,
      }
    })
    updateNotifications.mutate(matchId)
  }

  if (isLoading) return <div>loading...</div>
  if (isError) return <ErrorPage />

  // Creates an array of conversations with the other user, no matter if they were the giver or receiver
  const transformedData: MatchBubble[] = data
    ? data?.map((match) => {
        let otherId: string
        let otherUsername: string
        let otherFullName: string
        if (user?.sub === match.giverId) {
          otherId = match.receiverId
          otherUsername = match.receiverUsername
          otherFullName = match.receiverFullName
        } else {
          otherId = match.giverId
          otherUsername = match.giverUsername
          otherFullName = match.giverFullName
        }
        return {
          matchId: match.id,
          basketId: match.basketId,
          otherId,
          otherUsername,
          otherFullName,
        }
      })
    : []

  return (
    <div className="flex flex-col justify-center sm:flex-row lg:m-16">
      <div className="flex flex-col">
        <ChatBubble
          data={transformedData}
          onClick={handleClick}
          selectMatch={selectMatch}
        />
        <BasketButtons
          basketId={selectMatch.basketId}
          matchId={selectMatch.matchesId}
          // state={selectMatch}
          setSelectMatch={setSelectMatch}
        />
      </div>
      <section className="lg:w-full ">
        <ChatBox
          matchId={selectMatch.matchesId}
          otherUsername={selectMatch.otherUsername}
        />
      </section>
    </div>
  )
}

export default MatchesPage
