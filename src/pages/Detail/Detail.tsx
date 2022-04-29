import React, { useRef, useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../../components/Buttons/Button'
import ChapterItem from '../../components/ChapterItem/ChapterItem'
import Filter from '../../components/Filter/Filter'
import Pagination from 'rc-pagination';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import './detail.scss'
const Detail = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState<number>(() => {
        let page = parseInt(searchParams.get('page') || '1')
        return page
    })
    const chaptersCommentRef = useRef<HTMLDivElement>(null)

    const paginationOnchange = (current: any, pageSize: any) => {
        setCurrentPage(current)
        setSearchParams(`page=${current}`)
        if (chaptersCommentRef && chaptersCommentRef.current?.offsetTop) {
            window.scrollTo({
                left: 0,
                top: chaptersCommentRef.current?.offsetTop - 60,
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className='detail-page'>
            <div className="detail-hero">
                <div className="bg-blur" style={{ 'background': 'url(https://cdn.tienvuc.xyz/media/books/55462914-340925563215381-3717207779946004480-n-5b46.jpeg)' }}></div>
                <div className="detail-hero__content">
                    <div className="container">
                        <div className="novel-avatar">
                            <img src="https://cdn.tienvuc.xyz/media/books/55462914-340925563215381-3717207779946004480-n-5b46.jpeg" alt="book-avatar" />
                        </div>
                        <div className="novel-detail">
                            <div className="novel-detail__cates">
                                <Link to={'#'}><span className="tag tag-yellow tag-vip">vip</span></Link>
                                <Link to={'#'}><span className="tag tag-green">Full</span></Link>
                                <Link to={'#'}><span className="tag tag-blue">Dị giới</span></Link>
                                <Link to={'#'}><span className="tag tag-blue">Tiên Hiệp</span></Link>
                                <Link to={'#'}><span className="tag tag-blue">Xuyên Không</span></Link>
                            </div>
                            <h2 className="novel-detail__title">
                                Thần Đạo Đan Tôn (Bản Dịch FULL)
                            </h2>
                            <div className="novel-detail__author">Tác giả: Cô Đơn Địa Phi</div>
                            <div className="novel-detail__translator">
                                <span className='novel-detail__translator-title'>Dịch giả:</span>
                                <Link to={'#'}>
                                    <IoPersonCircleOutline className='novel-detail__translator-icon' />
                                    <span className='novel-detail__translator-name'>aqua01</span>
                                </Link>
                            </div>
                            <div className="novel-detail__views">
                                <span className="novel-detail__views-title">Lượt xem</span>
                                <span className="novel-detail__views-number">160555</span>
                            </div>
                            <div className="novel-detail__desc">
                                Lăng Hàn - Một Đan Đế đại danh đỉnh định mang trong thân mình tuyệt thế công pháp vì truy cầu bước cuối, xé bỏ tấm màn thành thần nhưng thất bại đã phải bỏ mình. Thế nhưng ông trời dường như không muốn tuyệt dường người, Lăng Hàn đã được trọng sinh vào một thiếu niên cùng tên và điều may mắn nhất là "Bất Diệt Thiên Kinh" ấn ký vẫn còn nằm nguyên trong tâm thức hắn.

                                Từ nay về sau sóng gió cuộn trào nổi lên, Đan Đế ngày xưa bây giờ phải cùng tranh phong với vô số thiên tài trẻ tuổi, lại bắt đầu một truyền thuyết mới như để chứng minh với trời đất: Ta, là người mạnh nhất!

                                Phân chia cảnh giới: Luyện Thể, Tụ Nguyên, Dũng Tuyền, Linh Hải, Thần Thai, Sinh Hoa, Linh Anh, Hóa Thần cùng Thiên Nhân Cảnh.....
                                Mỗi cảnh giới chia làm chín tầng : tầng một đến ba là tiền kỳ, tầng bốn đến sáu gọi là trung kỳ và tầng bảy đến chín gọi là hậu kỳ và đỉnh
                                Cảnh giới Đan Sư: Hoàng cấp,Huyền cấp, Địa cấp, Thiên cấp...

                                Thần Cảnh: Nhật Nguyệt Cảnh, Sơn Hà Cảnh, Tinh Thần Cảnh, Hằng Hà Cảnh, Sáng Thế Cảnh
                                Mỗi cảnh giới chia làm: Tiểu Cực Vị, Trung Cực Vị, Đại Cực Vi, Đại Viên Mãn trong một Cực Vị lại chia làm: Tiền kỳ, Trung kỳ, Hậu kỳ, Viên mãn

                                Cảnh giới Tiên Vực:Trảm Trần Cảnh (Nhất Trảm-Nhị Trảm-Tam Trảm-Tứ Trảm-Ngũ Trảm),Phân Hồn Cảnh (Dương Hồn-Âm Hồn-Thiên Hồn-Địa Hồn), Tiên Phủ Cảnh, Thăng Nguyên Cảnh, Tiên Vương có 9 tầng từ 1 đến 9, bên trên Tiên Vương là Thiên Tôn
                                Cảnh giới Đan Sư ở Tiên Vực: Nhất Tinh, Nhị Tinh , Tam Tinh, Tứ Tinh ,Ngũ Tinh Đan Sư
                            </div>
                            <div className="hero-buttons">
                                <Button className='btn bg-primary hover-primary text-white' title='Đọc tư đầu' link />
                                <Button className='btn bg-yellow hover-yellow text-black' title='Mua chương VIP' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chapters-comments" ref={chaptersCommentRef}>
                <div className="container">
                    <div className="list-chapters" >
                        <div className="list-chapters__title">
                            DS Chương
                            <span className='badge'>5339</span>
                        </div>
                        <Filter />
                        <div className="list-chapters__content">
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                        </div>
                        <div className="pagination-wrapper">
                            <Pagination
                                showLessItems
                                onChange={paginationOnchange}
                                disabled={false}
                                showPrevNextJumpers
                                defaultPageSize={20}
                                pageSize={20}
                                className="pagination"
                                jumpNextIcon={'...'}
                                jumpPrevIcon='...'
                                total={5000}
                                current={currentPage}
                                defaultCurrent={1}
                                nextIcon={<VscChevronRight />}
                                prevIcon={<VscChevronLeft />}
                            />

                        </div>
                    </div>

                    <div className="comments">
                        <div className="cmt-title">Bình luận</div>
                        <div className='cmt-content'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail