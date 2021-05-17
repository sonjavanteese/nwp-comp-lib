const getIcons = () => fetch('icons.json')
   .then(r => r.json())
   .then((data) => {
      return data;
   }).catch(e => console.log(e))

   export default getIcons;