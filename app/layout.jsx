import '@styles/globals.css';
export const metadata = {
    title:"project"
    
}
const layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <main className="main">
        {children}
        </main>
      </body>
    </html>
  )
}

export default layout

