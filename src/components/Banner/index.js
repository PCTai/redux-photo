import "./Banner.scss"
function Banner(props) {
    const {title, backgroundUrl} =props;
    const bannerStyle = backgroundUrl ?
    {   backgroundImage :`url(${backgroundUrl})`} : {}
    return ( 
    <div className="banner" style={bannerStyle}>
        <h1 className="banner-title">{title}</h1>
    </div> );
}

export default Banner;