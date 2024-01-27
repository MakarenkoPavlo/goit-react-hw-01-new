import { Profile } from './Profile/Profile.jsx'
import { FriendList } from './FriendList/FriendList.jsx'
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx'
import userData from '../components/userData.json'
import friends from "../components/friends.json";
import transactions from "../components/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList friends={friends} />
      
       <TransactionHistory items={transactions} />
    </div>
    )
}


