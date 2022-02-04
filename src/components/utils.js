// prettier-ignore
export const cdnImage = (name, placeholder,folder='/public',count=10) => {
  if (process.env.NODE_ENV === "production") {
    if (placeholder) {
      return "https://cdn.statically.io/img/ervandenbosch.github.io/h="+count+"/"+folder+"/"+name;
    } else {
      return "https://cdn.statically.io/img/ervandenbosch.github.io/f=auto/"+folder+"/"+name;
    }
  } else {
    return folder+"/" + name;
  }
};