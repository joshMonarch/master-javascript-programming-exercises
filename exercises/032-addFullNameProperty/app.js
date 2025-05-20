function addFullNameProperty(obj) {
  fullName = obj.firstName + " " + obj.lastName
  obj["fullName"] = fullName
  return obj
  
}