/* eslint-disable jsx-a11y/alt-text */
const MainFooter = () => {
    return (
    <>
        <footer className="footer">
            <div className="container-fluid">
                <div className="news-letter">
                    <i className="ico news"></i>
                    <p className="fz-20 font-bold fc-11">오픈애즈 뉴스레터 <span className="ico arrow"></span></p>
                    <p className="fz-16 fc-6">15,000명의 마케터를 성장시키는 뉴스레터가 궁금하다면</p>
                    <button type="button" className="btn btn-normal square">뉴스레터 구독하기</button>
                </div>
                <div className="company-info">
                    <p className="fz-16 font-bold fc-6">NHN AD</p>
                    <div className="footer-menu">
                        <a className="fz-14 font-bold fc-6 gap-dot">오픈애즈란</a>
                        <a className="fz-14 font-bold fc-6 gap-dot">이용약관</a>
                        <a className="fz-14 font-bold fc-6 gap-dot">개인정보처리방침</a>
                        <span className="fz-14 fc-6 gap-dot">사업자등록번호 144-81-27690</span>
                        <span className="fz-14 fc-6">대표 : 심도섭</span>
                    </div>
                    <p className="fz-14 fc-6">판교로 344,3층 NHNAD (삼평동, 아이디스타워)</p>
                    <p className="fz-14 fc-6">전화번호 1800-2198</p>
                    <p className="fz-14 fc-6">Copyright NHN AD. All right reserved</p>
                    <a className="sns-facebook" href="https://www.facebook.com/openads.official"><img src={require('../../openads/images/Ico_Facebook_24px.png')}/></a>
                    <a className="sns-insta" href="https://www.instagram.com/odri_openads/"><img src={require('../../openads/images/Ico_Insta_24px.png')}/></a>
                </div>
                {/*하단 띠 배너 형태의 구독하기*/}
                <div className="ly-new-letter">
                    {/* 일정 이상 스크롤을 내리면 나타나도록 수정해야한다..*/}
                    <div className="ly-new-letter type3 open">
                        <div className="box-body">
                            <a className="btn-close"></a>
                            <div className="img-obj"></div>
                            <a className="btn-view" href="https://page.stibee.com/archives/51974" target="_blank">지난 뉴스레터 보기</a>
                            <a className="btn-subscribe" href="https://bit.ly/2VK8yP1" target="_blank">구독하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
}

export default MainFooter;