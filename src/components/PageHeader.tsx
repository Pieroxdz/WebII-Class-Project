interface PageHeaderProps {
    pageTitle: String
    pageSubtitle: String
}

const PageHeader = (props: PageHeaderProps) => {
    return (
        <header id="page-header" className="shadow-lg py-5">
            <div className="wrapper">
                <h1>{props.pageTitle}</h1>
                <p>{props.pageSubtitle}</p>
            </div>
        </header>
    )
}

export default PageHeader