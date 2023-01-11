import Image from 'next/image';
import Link from 'next/link';
const Index = () => {
  return (
    <>
      <main className="relative h-[548.594vw] w-full select-none overflow-hidden md:h-[182.2vw]">
        <nav className="absolute top-0 z-30 flex w-full md:hidden">
          <Image placeholder="empty" src="/images/mobile/menutop.png" width={640} height={111} className="w-full" alt={'Background landing'} />
          <Link href="/" title="App Lục Giới Pong Thần">
            <Image
              placeholder="empty"
              src="/images/mobile/logo-app.png"
              width={104}
              height={104}
              className="absolute top-[5%] left-[2%] w-[15.250vw]"
              alt={'Background landing'}
            />
          </Link>
          <Link href="/" title="Giftcode" className="absolute right-[30%] top-[43%] block h-[45%] w-[26%]">
            <span className="hidden">Giftcode</span>
          </Link>
          <Link href="/" title="Trang chủ" className="absolute right-[15%] top-[20%] block h-[50%] w-[10%]">
            <span className="hidden">Home</span>
          </Link>
          <Link href="/" title="Facebook" className="h-[50% absolute right-[3%] top-[20%] block w-[10%]">
            <span className="hidden">Facebook</span>
          </Link>
        </nav>
        <div className="absolute top-0 left-[50%]  z-30 hidden h-[2.552vw] translate-x-[-50%] pt-[1.406vw] md:flex">
          <Link href="/" title="Trang chủ">
            <Image
              placeholder="empty"
              className="mr-[1.510vw] h-[2.552vw] w-[8.4375vw] transition-all hover:scale-105 hover:saturate-200"
              src="/images/btnHome.png"
              width={162}
              height={49}
              alt="Trang chủ"
            />
          </Link>
          <Link href="/" title="Group">
            <Image
              placeholder="empty"
              className="mr-[13.802vw] h-[2.552vw] w-[8.4375vw] transition-all hover:scale-105 hover:saturate-200"
              src="/images/btnGroup.png"
              width={162}
              height={49}
              alt="Group button"
            />
          </Link>
          <Link href="/" title="Fanpage">
            <Image
              placeholder="empty"
              className="mr-[1.510vw] h-[2.552vw] w-[8.4375vw] transition-all hover:scale-105 hover:saturate-200"
              src="/images/btnFanpage.png"
              width={162}
              height={49}
              alt="Fanpage"
            />
          </Link>
          <Link href="/" title="Đăng nhập">
            <Image
              placeholder="empty"
              className="h-[2.552vw] w-[8.4375vw] transition-all hover:scale-105 hover:saturate-200"
              src="/images/btnLogin.png"
              width={162}
              height={49}
              alt="Login"
            />
          </Link>
        </div>
        <Link href="/">
          <Image
            placeholder="empty"
            className="animate-in zoom-in absolute left-[50%] top-[18vw] z-40 h-[auto] w-[25%] translate-x-[-50%] transition-all hover:scale-105 md:top-[1%] md:h-[7.7604vw] md:w-[9.0625vw]"
            src="/images/logo.png"
            width={174}
            height={149}
            alt="Lục Giới Phong Thần Logo"
          />
        </Link>
        <Image
          placeholder="empty"
          src="/images/bg-landing.jpg"
          width={1920}
          height={100}
          className="hidden h-[100%] w-[100vw] bg-cover md:block"
          alt={'Background landing'}
        />
        <Image
          placeholder="empty"
          src="/images/mobile/bg-mobile.jpg"
          width={1920}
          height={100}
          className="h-[100%] w-[100%] bg-cover md:hidden"
          alt={'Background landing'}
        />

        <section className="absolute top-0 left-0 h-[100%] w-[100%]">
          <section className="page page1 relative h-[166vw] md:h-[46.875vw]">
            <Image
              placeholder="empty"
              className="absolute  left-0 top-[19vw] hidden h-[20.573vw] w-[12.500vw] animate-slideInLeft md:block"
              src="/images/page1-tree-left.png"
              width={240}
              height={395}
              alt="Cay left"
            />
            <Image
              placeholder="empty"
              className="absolute top-[17vw] hidden h-[15.833vw] w-[12.240vw] animate-slideInRight md:right-0 md:block"
              src="/images/page1-tree-right.png"
              width={235}
              height={304}
              alt="Cay phai"
            />
            <Image
              placeholder="empty"
              className="absolute left-[calc(50%-33.750vw)] top-[36.5vw] h-[auto] w-[79%] animate-zoomIn transition-all hover:scale-125 hover:animate-headShake md:left-[calc(50%-33.750vw/2)] md:top-[5.2083vw] md:h-[40vw] md:w-[33.75vw]"
              src="/images/page1-nv1.png"
              width={648}
              height={768}
              alt="Nhân vật 1"
            />
            <Image
              placeholder="empty"
              className="absolute left-[2%] top-[119vw] h-[auto] w-[97%] hover:animate-headShake hover:saturate-150 md:left-[calc(50%-55.573vw/2)] md:top-[34vw] md:h-[14.94791vw] md:w-[53.5729vw]"
              src="/images/startup-thien-dinh.png"
              width={1067}
              height={287}
              alt="Startup thiên đình"
            />

            <Link href="/" title="Tải game" className="cursor-pointer">
              <Image
                placeholder="empty"
                className="absolute left-[30%] top-[144.6vw] z-50 flex h-[auto] w-[45.03125vw] animate-heartBeat cursor-pointer animate-infinite hover:scale-[101%] hover:saturate-150 md:top-[48.6vw] md:left-[calc(50%-17.031vw/2)] md:h-[5.2083vw] md:w-[17.03125vw]"
                src="/images/btnTaiGame.png"
                width={327}
                height={100}
                alt="Tải game"
              />
            </Link>
            <div className="absolute left-[50%] top-[159vw] flex translate-x-[-50%] -rotate-[4deg] whitespace-nowrap italic md:top-[54vw]">
              Nhớ ấn nút phía trên để nhận rương thần tướng SS nha
            </div>
            <div className='absolute top-[80%] left-[70%]'>
              <div className="flare animate-pulse animate-infinite">
                <div className="subflare subflare1"></div>
                <div className="subflare subflare2"></div>
                <div className="subflare subflare3"></div>
              </div>
            </div>
            <div className='absolute top-[85%] left-[40%]'>
              <div className="flare animate-pulse animate-infinite">
                <div className="subflare subflare1"></div>
                <div className="subflare subflare2"></div>
                <div className="subflare subflare3"></div>
              </div>
            </div>
          </section>
          <section className="page page2 relative h-[166vw] md:h-[46.875vw]">
            <Image
              placeholder="empty"
              className="absolute left-0 top-[20%] h-[49.531vw] w-[100vw] scale-150 animate-zoomIn opacity-20 animate-slower animate-infinite md:top-[0%]"
              src="/images/page2-leaf.png"
              width={1920}
              height={951}
              alt="Chọn tướng khởi nghiệp"
            />
            <Image
              placeholder="empty"
              className="absolute left-[20vw] top-[5vw] h-[auto] w-[60%] transition-all hover:animate-headShake hover:saturate-150 md:left-[15vw] md:top-[19vw] md:h-[12.031vw] md:w-[28.490vw]"
              src="/images/chon-tuong-khoi-nghiep.png"
              width={547}
              height={231}
              alt="Chọn tướng khởi nghiệp"
            />
            <div>
              {/* Ngọc hoàng */}
              <input id="ngochoang" className="peer/ngochoang hidden" type="radio" name="status" defaultChecked />
              <label htmlFor="ngochoang" className="absolute top-[108vw] left-[4vw] z-10 cursor-pointer md:top-[35.5vw] md:left-[12.5vw]">
                <Image
                  placeholder="empty"
                  className="w-[20.156vw] md:h-[7.396vw] md:w-[7.396vw]"
                  src="/images/tuong-ngoc-hoang-dai-de-check.png"
                  width={142}
                  height={142}
                  alt="Ngọc hoàng đại đế thumbnail"
                />
              </label>
              <div className="absolute left-[4vw] top-[35vw] hidden animate-zoomIn peer-checked/ngochoang:block md:left-auto md:top-[17vw] md:right-[8vw]">
                <Image
                  placeholder="empty"
                  className="h-auto w-[92vw] md:h-[40.990vw] md:w-[40.313vw]"
                  src="/images/tuong-ngoc-hoang-dai-de.png"
                  width={774}
                  height={787}
                  alt="Ngọc hoàng đại đế"
                />
              </div>
              <label
                htmlFor="ngochoang"
                className="absolute top-[108vw] left-[4vw] z-20 animate-fadeIn cursor-pointer peer-checked/ngochoang:hidden md:top-[35.5vw] md:left-[12.4vw]">
                <Image placeholder="empty" className="w-[20.2vw] md:h-[7.4vw] md:w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
              </label>

              {/* Hồ ly */}
              <input id="holy" className="peer/holy hidden" type="radio" name="status" />
              <label htmlFor="holy" className="absolute top-[108vw] left-[27.7vw] z-10 cursor-pointer md:top-[35.5vw] md:left-[21.7vw]">
                <Image
                  placeholder="empty"
                  className="w-[20.156vw] md:h-[7.396vw] md:w-[7.396vw]"
                  src="/images/tuong-cuu-vi-ho-ly-check.png"
                  width={142}
                  height={142}
                  alt="Cửu vĩ hồ ly thumbnail"
                />
              </label>
              <div className="absolute top-[35vw] left-[4vw] hidden animate-zoomIn peer-checked/holy:block md:left-auto md:top-[17vw]  md:right-[8vw]">
                <Image
                  placeholder="empty"
                  className="h-auto w-[92vw] md:h-[40.990vw] md:w-[40.313vw]"
                  src="/images/tuong-cuu-vi-ho-ly.png"
                  width={774}
                  height={787}
                  alt="Cửu vĩ hồ ly"
                />
              </div>
              <label
                htmlFor="holy"
                className="absolute top-[108vw] left-[27.7vw] z-20 animate-fadeIn cursor-pointer peer-checked/holy:hidden md:top-[35.5vw] md:left-[21.6vw]">
                <Image placeholder="empty" className="w-[20.2vw] md:h-[7.4vw] md:w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
              </label>

              {/* Duong tien */}
              <input id="duongtien" className="peer/duongtien hidden" type="radio" name="status" />
              <label htmlFor="duongtien" className="absolute top-[108vw] left-[51.1vw] z-10 cursor-pointer md:top-[35.5vw] md:left-[30.8vw]">
                <Image
                  placeholder="empty"
                  className="w-[20.156vw] md:h-[7.396vw] md:w-[7.396vw]"
                  src="/images/tuong-duong-tien-check.png"
                  width={142}
                  height={142}
                  alt="Duong Tien thumbnail"
                />
              </label>
              <div className="absolute top-[35vw] left-[5vw] hidden animate-zoomIn peer-checked/duongtien:block md:left-auto md:top-[17vw]  md:right-[8vw]">
                <Image
                  placeholder="empty"
                  className="h-auto w-[92vw] md:h-[40.990vw] md:w-[40.313vw]"
                  src="/images/tuong-duong-tien.png"
                  width={774}
                  height={787}
                  alt="Duong Tien"
                />
              </div>
              <label
                htmlFor="duongtien"
                className="absolute top-[108vw] left-[51.1vw] z-20 animate-fadeIn cursor-pointer peer-checked/duongtien:hidden md:top-[35.5vw] md:left-[30.7vw]">
                <Image placeholder="empty" className="w-[20.2vw] md:h-[7.4vw] md:w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
              </label>

              {/* Hang Nga */}
              <input id="hangnga" className="peer/hangnga hidden" type="radio" name="status" />
              <label htmlFor="hangnga" className="absolute top-[108vw] left-[74.5vw] z-10 cursor-pointer md:top-[35.5vw] md:left-[40vw]">
                <Image
                  placeholder="empty"
                  className="w-[20.156vw] md:h-[7.396vw] md:w-[7.396vw]"
                  src="/images/tuong-hang-nga-check.png"
                  width={142}
                  height={142}
                  alt="Hang Nga thumbnail"
                />
              </label>
              <div className="absolute top-[35vw]  left-[4vw] hidden animate-zoomIn peer-checked/hangnga:block md:left-auto md:top-[17vw]  md:right-[8vw]">
                <Image
                  placeholder="empty"
                  className="h-auto w-[92vw] md:h-[40.990vw] md:w-[40.313vw]"
                  src="/images/tuong-hang-nga.png"
                  width={774}
                  height={787}
                  alt="Hang Nga "
                />
              </div>
              <label
                htmlFor="hangnga"
                className="absolute top-[108vw] left-[74.5vw] z-20 animate-fadeIn cursor-pointer peer-checked/hangnga:hidden md:top-[35.5vw] md:left-[39.9vw]">
                <Image placeholder="empty" className="w-[20.2vw] md:h-[7.4vw] md:w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
              </label>

              {/* Quan Am */}
              <input id="quanam" className="peer/quanam hidden" type="radio" name="status" />
              <label htmlFor="quanam" className="absolute top-[131vw] left-[4vw] cursor-pointer md:top-[44.5vw] md:left-[12.5vw]">
                <Image
                  placeholder="empty"
                  className="w-[20.156vw] md:h-[7.396vw] md:w-[7.396vw]"
                  src="/images/tuong-quan-am-check.png"
                  width={142}
                  height={142}
                  alt="Quan Am thumbnail"
                />
              </label>
              <div className="absolute top-[35vw]  left-[4vw] hidden  animate-zoomIn peer-checked/quanam:block md:left-auto md:top-[17vw]  md:right-[8vw]">
                <Image
                  placeholder="empty"
                  className="h-auto w-[92vw] md:h-[40.990vw] md:w-[40.313vw]"
                  src="/images/tuong-quan-am.png"
                  width={774}
                  height={787}
                  alt="Quan Am"
                />
              </div>
              <label
                htmlFor="quanam"
                className="absolute top-[131vw] left-[4vw] z-20 animate-fadeIn cursor-pointer peer-checked/quanam:hidden md:top-[44.5vw] md:left-[12.4vw]">
                <Image placeholder="empty" className="w-[20.2vw] md:h-[7.4vw] md:w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
              </label>

              {/* Thông Thiên Giáo Chủ */}
              <input id="thongthien" className="peer/thongthien hidden" type="radio" name="status" />
              <label htmlFor="thongthien" className="absolute top-[131vw] left-[27.7vw] cursor-pointer md:top-[44.5vw] md:left-[21.7vw]">
                <Image
                  placeholder="empty"
                  className="w-[20.156vw] md:h-[7.396vw] md:w-[7.396vw]"
                  src="/images/tuong-thong-thien-giao-chu-check.png"
                  width={142}
                  height={142}
                  alt="Thông Thiên Giáo Chủ thumbnail"
                />
              </label>
              <div className="absolute top-[35vw] left-[4vw]  hidden animate-zoomIn peer-checked/thongthien:block md:left-auto md:top-[17vw] md:right-[8vw]">
                <Image
                  placeholder="empty"
                  className="h-auto w-[92vw] md:h-[40.990vw] md:w-[40.313vw]"
                  src="/images/tuong-thong-thien-giao-chu.png"
                  width={774}
                  height={787}
                  alt="Thông Thiên Giáo Chủ"
                />
              </div>
              <label
                htmlFor="thongthien"
                className="absolute top-[131vw] left-[27.7vw] z-20 animate-fadeIn cursor-pointer peer-checked/thongthien:hidden md:top-[44.5vw] md:left-[21.6vw]">
                <Image placeholder="empty" className="w-[20.2vw] md:h-[7.4vw] md:w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
              </label>

              {/* Khuong tu nha */}
              <input id="tunha" className="peer/tunha hidden" type="radio" name="status" />
              <label htmlFor="tunha" className="absolute top-[131vw] left-[51.1vw] cursor-pointer md:top-[44.5vw] md:left-[30.8vw]">
                <Image
                  placeholder="empty"
                  className="w-[20.156vw] md:h-[7.396vw] md:w-[7.396vw]"
                  src="/images/tuong-khuong-tu-nha-check.png"
                  width={142}
                  height={142}
                  alt="khuong tu nha thumbnail"
                />
              </label>
              <div className="absolute top-[35vw]  left-[4vw] hidden  animate-zoomIn peer-checked/tunha:block md:left-auto md:top-[17vw]  md:right-[8vw]">
                <Image
                  placeholder="empty"
                  className="h-auto w-[92vw] md:h-[40.990vw] md:w-[40.313vw]"
                  src="/images/tuong-khuong-tu-nha.png"
                  width={774}
                  height={787}
                  alt="Khuong tu nha"
                />
              </div>
              <label
                htmlFor="tunha"
                className="absolute top-[131vw] left-[51.1vw] z-20 animate-fadeIn cursor-pointer peer-checked/tunha:hidden md:top-[44.5vw] md:left-[30.7vw]">
                <Image placeholder="empty" className="w-[20.2vw] md:h-[7.4vw] md:w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
              </label>

              {/* Ngo Khong */}
              <input id="ngokhong" className="peer/ngokhong hidden" type="radio" name="status" />
              <label htmlFor="ngokhong" className="absolute top-[131vw] left-[74.5vw] cursor-pointer md:top-[44.5vw] md:left-[40vw]">
                <Image
                  placeholder="empty"
                  className="w-[20.156vw] md:h-[7.396vw] md:w-[7.396vw]"
                  src="/images/tuong-ton-ngo-khong-check.png"
                  width={142}
                  height={142}
                  alt="Ngo Khong thumbnail"
                />
              </label>
              <div className="absolute top-[35vw]  left-[4vw] hidden animate-zoomIn peer-checked/ngokhong:block md:left-auto md:top-[17vw]  md:right-[8vw]">
                <Image
                  placeholder="empty"
                  className="h-auto w-[92vw] md:h-[40.990vw] md:w-[40.313vw]"
                  src="/images/tuong-ton-ngo-khong.png"
                  width={774}
                  height={787}
                  alt="Ngo Khong"
                />
              </div>
              <label
                htmlFor="ngokhong"
                className="absolute top-[131vw] left-[74.5vw] z-20 animate-fadeIn cursor-pointer peer-checked/ngokhong:hidden md:top-[44.5vw] md:left-[39.9vw]">
                <Image placeholder="empty" className="w-[20.2vw] md:h-[7.4vw] md:w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
              </label>

              <div
                className="animate-pulse1 absolute cursor-pointer opacity-0 transition-all  animate-infinite 
                peer-checked/ngochoang:top-[105vw] 
                peer-checked/ngochoang:left-[1.7vw] 
                peer-checked/holy:top-[105vw] 
                peer-checked/holy:left-[25.5vw] 
                peer-checked/thongthien:left-[25.5vw] 
                peer-checked/duongtien:left-[48.8vw] 
                peer-checked/tunha:left-[48.8vw] 
                peer-checked/hangnga:left-[72.3vw] 
                peer-checked/ngokhong:left-[72.3vw] 
                peer-checked/quanam:left-[1.7vw] 
                peer-checked/duongtien:top-[105vw] 
                peer-checked/hangnga:top-[105vw] 
                peer-checked/quanam:top-[127.9vw] 
                peer-checked/thongthien:top-[127.9vw] 
                peer-checked/ngokhong:top-[127.9vw] 
                peer-checked/tunha:top-[127.9vw] 
                peer-checked/ngochoang:opacity-100 
                peer-checked/holy:opacity-100 
                peer-checked/duongtien:opacity-100 
                peer-checked/hangnga:opacity-100 
                peer-checked/quanam:opacity-100 
                peer-checked/thongthien:opacity-100 
                peer-checked/tunha:opacity-100 
                peer-checked/ngokhong:opacity-100 
                md:peer-checked/tunha:left-[30vw] 
                md:peer-checked/hangnga:left-[39.2vw] 
                md:peer-checked/ngokhong:left-[39.2vw] 
                md:peer-checked/ngokhong:top-[43.45vw] 
                md:peer-checked/tunha:top-[43.45vw] 
                md:peer-checked/quanam:left-[11.7vw] 
                md:peer-checked/quanam:top-[43.45vw] 
                md:peer-checked/thongthien:top-[43.45vw] 
                md:peer-checked/thongthien:left-[20.95vw] 
                md:peer-checked/holy:top-[34.45vw] 
                md:peer-checked/holy:left-[20.95vw] 
                md:peer-checked/ngochoang:top-[34.45vw] 
                md:peer-checked/ngochoang:left-[11.7vw] 
                md:peer-checked/duongtien:left-[30vw] 
                md:peer-checked/duongtien:top-[34.45vw] 
                md:peer-checked/hangnga:top-[34.45vw] 
            ">
                <Image
                  placeholder="empty"
                  className="h-[25.625vw] w-[25.625vw] md:h-[9.271vw] md:w-[9.271vw]"
                  src="/images/tuong-select.png"
                  width={179}
                  height={178}
                  alt="choice"
                />
              </div>
            </div>
          </section>
          <div className="page page3 relative h-[166vw] md:h-[46.875vw]">
            <Image
              placeholder="empty"
              src="/images/lo-trinh-ra-mat.png"
              width={493}
              height={292}
              className="absolute transition-all hover:animate-headShake hover:saturate-150 md:top-[35vw] md:left-[4vw] md:h-[15.208vw] md:w-[25.677vw]"
              alt={'Lộ trình ra mắt'}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
