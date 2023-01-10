import Image from 'next/image';
import Link from 'next/link';
const Index = () => {
  return (
    <>
      <main className="relative h-[548.594vw] w-full select-none overflow-hidden md:h-[182.2vw]">
        <nav className="absolute top-0 z-30 flex w-full md:hidden">
          <Image src="/images/mobile/menutop.png" width={640} height={111} className="w-full" alt={'Background landing'} />
          <Link href="/" title="App Lục Giới Pong Thần">
            <Image src="/images/mobile/logo-app.png" width={104} height={104} className="absolute top-[5%] left-[2%] w-[15.250vw]" alt={'Background landing'} />
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
              className="mr-[1.510vw] h-[2.552vw] w-[8.4375vw] transition-all hover:scale-105 hover:saturate-200"
              src="/images/btnHome.png"
              width={162}
              height={49}
              alt="Trang chủ"
            />
          </Link>
          <Link href="/" title="Group">
            <Image
              className="mr-[13.802vw] h-[2.552vw] w-[8.4375vw] transition-all hover:scale-105 hover:saturate-200"
              src="/images/btnGroup.png"
              width={162}
              height={49}
              alt="Group button"
            />
          </Link>
          <Link href="/" title="Fanpage">
            <Image
              className="mr-[1.510vw] h-[2.552vw] w-[8.4375vw] transition-all hover:scale-105 hover:saturate-200"
              src="/images/btnFanpage.png"
              width={162}
              height={49}
              alt="Fanpage"
            />
          </Link>
          <Link href="/" title="Đăng nhập">
            <Image
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
            className="animate-in zoom-in absolute left-[50%] top-[35%] z-40 h-[auto] w-[25%] translate-x-[-50%] transition-all hover:scale-105 md:top-[1%] md:h-[7.7604vw] md:w-[9.0625vw]"
            src="/images/logo.png"
            width={174}
            height={149}
            alt="Lục Giới Phong Thần Logo"
          />
        </Link>
        <Image src="/images/bg-landing.jpg" width={1920} height={100} className="hidden h-[100%] w-[100vw] bg-cover md:block" alt={'Background landing'} />
        <Image src="/images/mobile/bg-mobile.jpg" width={1920} height={100} className="h-[100%] w-[100%] bg-cover md:hidden" alt={'Background landing'} />

        <section className="absolute top-0 left-0 h-[100%] w-[100%]">
          <section className="page page1 relative h-[46.875vw]">
            <Image
              className="absolute left-[calc(50%-33.750vw)] top-[36.5vw] h-[auto] w-[79%] animate-fadeInUpBig transition-all hover:scale-105 hover:animate-fadeOutDownBig md:left-[calc(50%-33.750vw/2)] md:top-[5.2083vw] md:h-[40vw] md:w-[33.75vw]"
              src="/images/page1-nv1.png"
              width={648}
              height={768}
              alt="Nhân vật 1"
            />
            <Image
              className="absolute left-[2%] top-[119vw] h-[auto] w-[97%] animate-wobble transition-all hover:saturate-150 md:left-[calc(50%-55.573vw/2)] md:top-[34vw] md:h-[14.94791vw] md:w-[53.5729vw]"
              src="/images/startup-thien-dinh.png"
              width={1067}
              height={287}
              alt="Startup thiên đình"
            />

            <Link href="/" title="Tải game">
              <Image
                className="absolute left-[30%] top-[144.6vw] flex h-[auto] w-[45.03125vw] animate-heartBeat animate-infinite hover:scale-[101%] hover:saturate-150 md:top-[48.6vw] md:left-[calc(50%-17.031vw/2)] md:h-[5.2083vw] md:w-[17.03125vw]"
                src="/images/btnTaiGame.png"
                width={327}
                height={100}
                alt="Tải game"
              />
            </Link>
            <div className="absolute left-[50%] top-[159vw] flex translate-x-[-50%] -rotate-[4deg] whitespace-nowrap italic md:top-[54vw]">
              Nhớ ấn nút phía trên để nhận rương thần tướng SS nha
            </div>
          </section>
          <section className="page page2 relative h-[46.875vw]">
            <Image
              className="absolute left-[2%] top-[119vw] h-[auto] w-[97%] animate-wobble transition-all hover:saturate-150 md:left-[15vw] md:top-[19vw] md:h-[12.031vw] md:w-[28.490vw]"
              src="/images/chon-tuong-khoi-nghiep.png"
              width={547}
              height={231}
              alt="Chọn tướng khởi nghiệp"
            />

            <input id="ngochoang" className="peer/ngochoang hidden" type="radio" name="status" />
            <label htmlFor="ngochoang" className="absolute top-[35.5vw] left-[12.5vw] cursor-pointer">
              <Image className="h-[7.396vw] w-[7.396vw]" src="/images/tuong-ngoc-hoang-dai-de-check.png" width={142} height={142} alt="Ngọc hoàng đại đế thumbnail" />
            </label>
            <div className="absolute top-[17vw] right-[8vw] hidden animate-fadeIn peer-checked/ngochoang:block">
              <Image className="h-[40.990vw] w-[40.313vw]" src="/images/tuong-ngoc-hoang-dai-de.png" width={774} height={787} alt="Ngọc hoàng đại đế" />
            </div>
            <label htmlFor="ngochoang" className="absolute top-[35.5vw] left-[12.4vw] animate-fadeIn cursor-pointer peer-checked/ngochoang:hidden">
              <Image className="h-[7.4vw] w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
            </label>

            <input id="holy" className="peer/holy hidden" type="radio" name="status" checked />
            <label htmlFor="holy" className="absolute top-[35.5vw] left-[22.2vw] cursor-pointer">
              <Image className="h-[7.396vw] w-[7.396vw]" src="/images/tuong-cuu-vi-ho-ly-check.png" width={142} height={142} alt="Cửu vĩ hồ ly thumbnail" />
            </label>
            <div className="absolute top-[17vw] right-[8vw] hidden animate-fadeIn peer-checked/holy:block">
              <Image className="h-[40.990vw] w-[40.313vw]" src="/images/tuong-cuu-vi-ho-ly.png" width={774} height={787} alt="Cửu vĩ hồ ly" />
            </div>
            <label htmlFor="holy" className="absolute top-[35.5vw] left-[22.1vw] animate-fadeIn cursor-pointer peer-checked/holy:hidden">
              <Image className="h-[7.4vw] w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
            </label>

            <input id="duongtien" className="peer/duongtien hidden" type="radio" name="status" checked />
            <label htmlFor="duongtien" className="absolute top-[35.5vw] left-[32.2vw] cursor-pointer">
              <Image className="h-[7.396vw] w-[7.396vw]" src="/images/tuong-duong-tien-check.png" width={142} height={142} alt="Duong Tien thumbnail" />
            </label>
            <div className="absolute top-[17vw] right-[8vw] hidden animate-fadeIn peer-checked/holy:block">
              <Image className="h-[40.990vw] w-[40.313vw]" src="/images/tuong-duong-tien.png" width={774} height={787} alt="Cửu vĩ hồ ly" />
            </div>
            <label htmlFor="duongtien" className="absolute top-[35.5vw] left-[32.1vw] animate-fadeIn cursor-pointer peer-checked/duongtien:hidden">
              <Image className="h-[7.4vw] w-[7.4vw]" src="/images/page2-hover.png" width={142} height={142} alt="check mask" />
            </label>

            <div
              className="absolute cursor-pointer opacity-0  transition-all peer-checked/ngochoang:top-[34.45vw] peer-checked/ngochoang:left-[11.7vw] peer-checked/holy:top-[34.45vw]
                peer-checked/holy:left-[21.4vw] peer-checked/duongtien:left-[21.4vw] peer-checked/ngochoang:opacity-100
                peer-checked/holy:opacity-100 peer-checked/duongtien:opacity-100
            ">
              <Image className="h-[9.271vw] w-[9.271vw]" src="/images/tuong-select.png" width={179} height={178} alt="choice" />
            </div>

            <input id="published" className="peer/published" type="radio" name="status" />
            <label htmlFor="published" className="peer-checked/published:text-sky-500">
              Published
            </label>

            <div className="hidden animate-fadeIn peer-checked/published:block">Your post will be publicly visible on your site.</div>
          </section>
          <div className="page page3 relative"></div>
        </section>
      </main>
    </>
  );
};

export default Index;
