export default function Item({item}) {
   return (
    <div key={item.shortUrl}>         
        <a href={ "/u/" + item.shortUrl} target='_BLANK'> {item.url} ({item.views} views) </a>
    </div>
   )

}