import { useNavigate } from "react-router-dom"

function Logo({ style, imgStyle }: { style?: string, imgStyle?: string }) {
  const navigate = useNavigate();

  return (
    <picture onClick={() => { navigate("/") }} className={`flex items-center justify-center cursor-pointer ${style}`}>
      <source className={`${imgStyle}`} srcSet="/sqli_logo.webp" type="image/webp" />
      <source className={`${imgStyle}`} srcSet="/sqli_logo.webp" type="image/jpeg" />
      <img className={`${imgStyle}`} src="/sqli_logo.webp" />
    </picture>
  )
}

export default Logo