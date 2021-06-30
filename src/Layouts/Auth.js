const Auth = ({ children }) => {
    return (<>
        <main>
            <section>
                <div className="card w-30 mt-100 mx-auto">
                    { children }
                </div>
            </section>
        </main>
        <footer className="mt-20">
            <div className="container txt-center txt-gray-300 txt-size-12 txt-italic">
                Tous droits réservés &copy; 2021 overconsulting.net
            </div>
        </footer>
    </>)
}

export default Auth