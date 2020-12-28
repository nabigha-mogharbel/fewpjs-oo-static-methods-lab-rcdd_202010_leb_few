class Formatter {
  static capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[&\/\\#,+()$~]/g,'')
  }
 
  static titleize(string){
    let words=string.split(" ")
    for let(let i=1; i<words.length; i++){
      words[0].charAt(0).toUpperCase() + string.slice(0)
      if(words[i]==="the"||words[i]==="a"||words[i]==="of"|| words[i]==="and"||words[i]==="for"||words[i]==="at"||words[i]==="but"){
        word[i]=word[i] }
      else(){word[i]= word[i].charAt(0).toUperCase() + words[i].splice(1)}
    }
  }
}