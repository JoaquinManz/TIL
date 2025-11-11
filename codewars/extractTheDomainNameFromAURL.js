function domainName(url){
  //your code here
  //replace the http:// and https:// with empty strings
  let domain = url.replace("http://","").replace("https://","");
  // split the domain at the first "/"
  domain = domain.split("/")[0];
  // split the domain at the first "."
  const parts = domain.split(".")
  
  // check if the first part is "www"
  if(parts[0] === "www") {
    // if it is, return the second part
    return parts[1]
  } else {
    // if it is not, return the first part
    return parts[0]
  }
}