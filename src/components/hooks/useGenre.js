const useGenres =(chooseGenres)=>{
 if(chooseGenres.length<1) return "";
 const genreId=chooseGenres.map((g)=>g.id);
 return genreId.reduce((acc,curr)=>acc+","+curr)
}
export default useGenres