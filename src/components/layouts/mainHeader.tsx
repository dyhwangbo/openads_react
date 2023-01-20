import { moveNewLetterPage } from "../../functions/newLetterFn";

const MainHeader = () => {
    /* 헤더 부분 설정 값 모음*/
    

    //북마크 클릭 이벤트
    const unAuthorizedBookmarkEvent = () => {}
    //페이지 이동 이벤트
    //뉴스레터의 경우 경로가 위치에 따라 다 다르다.
    
    const movePageEvent = (e: { target: any }) => {
        const { target } = e;
        switch (target.id){
            case 'newsLetterSubscribe' :
              return moveNewLetterPage('header');
            default : 
              return window.location.href='https://www.openads.co.kr/common/login';
          }
    }
    return (
    <>
        <header className="header">
            <div className="container">
                <div className="box-inner">
                    <div className="box-left">
                        <a className="logo" href="/">Open Ads</a>
                        <div className="gnb">
                            <a className="one-depth" href="/content">콘텐츠</a>
                            <a className="one-depth" href="/insighter">인사이터</a>
                            <a className="one-depth" href="/benefit">혜택</a>
                            <a className="one-depth" href="/item">상품</a>
                        </div>
                    </div>
                    <div className="box-right">
                        {/*검색*/}
                        <div className="util-search">
                            <a className="ico" href="/search"></a>
                        </div>
                        {/*북마크*/}
                        <div className="util-bookmark">
                        	<a className="ico" id="unAuthorizedBookmark" onClick={unAuthorizedBookmarkEvent}></a>
                        </div>
                        {/*회원 가입 및 로그인*/}
                        <div className="util-member">
	                        <a className="fz-16 fc-6" id="signIn" onClick={movePageEvent} href="#!">로그인</a>
                            <i className="dot"></i>
                            <a className="fz-16 fc-6" id="signUp" onClick={movePageEvent} href="#!">회원가입</a>
                        </div>
                        {/*종 알림*/}
                        <div className="util-notify dropdown">
                            <div className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <a className="ico"></a>
                                    <i className="num">2</i>
                            </div>
                            {/*종 알림 리스트 나와야 하는 부분. 추후 작업*/} 
                            {/* <div className="dropdown-menu">
                                <div className="box-header">
                                    <div className="box-left">
                                        <h3 className="fz-20 font-bold fc-10">알림</h3>
                                        <a className="ico arrow"></a>
                                        <span className="fz-14 fc-4">3개의 알림</span>
                                    </div>
                                    <div className="box-right">
                                        <a className="ico ico-close"></a>
                                    </div>
                                </div>
                                <div className="box-body">
                                        
                                </div>
                            </div> */}
                        </div>
                        {/*개인메뉴*/}
                        <div className="util-user-info dropdown">
                            <div className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <a className="ico"></a>
                            </div>
                            <div className="dropdown-menu">

                            </div>
                        </div>
                        <a className="btn btn-light small" id="newsLetterSubscribe" onClick={movePageEvent}>뉴스레터 구독</a>

                    </div>    
                </div>
            </div>
        </header>
    </>
    );
}

export default MainHeader;