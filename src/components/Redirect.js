let url = "https://lifeofadream.vercel.app"

if (window.location.hostname === "localhost") {
    url = "http://localhost:3000"
}

export const Redirect = (path) => {
    window.location.href = url + path
}