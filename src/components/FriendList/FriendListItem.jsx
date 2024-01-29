import css from './FriendListItem.module.css'
export const FriendListItem = ({ avatar, name, isOnline }) => {
 const statusClass = isOnline ? css.Online : css.Offline
    return (
    <div className={css.item}>
        <img className={css.avatar} src={avatar} alt="Avatar" width="64" />
        <p className={css.name}>{name}</p>
        <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>    </div>
    )
}