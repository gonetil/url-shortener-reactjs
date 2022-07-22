
function getRandomURL() {
    const random_string =
      Math.random().toString(32).substring(2, 5) +
      Math.random().toString(32).substring(2, 5);
    return random_string;
  }

export function add(state, action) {
    const url = action.data;

    if (state.items.find( element => element.url === url) !== undefined) {
       console.log('URL already exists');
      return {items:[...state.items]};
    }

    const shortUrl = getRandomURL();
    const temp = [...state.items];
    
    const newItem = {
        url: url.toString(),
        shortUrl : shortUrl,
        views: 0,
    };
    temp.unshift(newItem);
    localStorage.setItem('urls',JSON.stringify(temp));
    return {items:[...temp]};
}

export function load(state,action) {
  const urls = localStorage.getItem('urls');
  if (urls)
    return { items: [...JSON.parse(urls)] };
}

export function addView(state,action) {
  const urls = localStorage.getItem('urls');
  if (urls) { 
    const temp = JSON.parse(urls);
    const item = temp.find( i => i.shortUrl === action.data);
    if (item) { 
      item.views++;
      localStorage.setItem('urls',JSON.stringify(temp));
      return { items: [...temp] };
      }
    }

}