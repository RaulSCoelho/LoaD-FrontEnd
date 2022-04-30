let url = "https://lifeofadream.vercel.app"

export const Redirect = (path) => {
    window.location.href = window.location.hostname === "localhost" ? `http://localhost:3000${path}`
        : window.location.hostname === "192.168.0.87" ? `http://192.168.0.87:3000${path}`
            : url + path
}