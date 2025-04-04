import './index.scss';
export const Loading = ()=> {
    return(
        <div className="h-[100vh] bg-red-500 Loading_container flex items-center justify-center">
            <svg className='Pulse' width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.57085 20.2853L19.7014 34.202C20.2226 34.6813 20.4832 34.921 20.7905 34.9801C20.9288 35.0066 21.0712 35.0066 21.2095 34.9801C21.5168 34.921 21.7774 34.6813 22.2986 34.202L37.4292 20.2853C41.6863 16.3698 42.2032 9.92634 38.6228 5.40797L37.9496 4.55838C33.6663 -0.846894 25.0688 0.059611 22.0591 6.23382C21.634 7.10597 20.366 7.10597 19.9409 6.23382C16.9312 0.059611 8.33367 -0.846886 4.05044 4.55838L3.37721 5.40797C-0.203234 9.92635 0.313734 16.3698 4.57085 20.2853Z" fill="#926C88" stroke="#926C88" strokeWidth="2"/>
</svg>

        </div>
    )
}