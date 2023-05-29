export const SpinnerLoading = () => {
  return (
    <div className='container m-5 d-flex justify-contnt-center' style={{height: 550}}>
        <div className="spinner-border text-primary" role='status'>
            <div className="visually-hidden">
                Loading...
            </div>
        </div>
    </div>
  )
}
