

export function getRoutes(rol) {
switch(rol){
      case "admin": return"/";
      case "profesor":  return "/";
      case "secretaria": return "/";
      default: return "/";
    }
}
