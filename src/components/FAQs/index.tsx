import {useEffect, useState} from 'react';
import * as React from 'react';

import {createPortal} from 'react-dom'
import './index.scss'
import SectionTitle from "../SectionTitle/index.js";



// const createPortal = ReactDOM.createPortal

export type FAQItemProps = {title: string, contentList: string[], isShow: boolean}

export interface FAQSProps{
  title?: string,
  FaqList: FAQItemProps[],
  isDark?:boolean,
  id?: string
}

export const initialFAQTitle = 'faq title'
export const initialFaqList = [

  {
    title:'Is GBTC a good investment, especially when it is trading at a discount to NAV?',
    contentList: [
      'GBTC shares do allow investors to have exposure to Bitcoin while bypassing certain challenges such as storage, security and insurance, as well as legal compliance in the case of US investors. However, steep discount to NAV also meant that GBTC shareholders are likely to be in the state of panic or fear. With recent attacks towards the Grayscale management, such added variable to the already volatile Bitcoin price movement may increase the risk for new investors to Bitcoin and cryptocurrencies.',
      'other GBTC shares do allow investors to have exposure to Bitcoin while bypassing certain challenges such as storage, security and insurance, as well as legal compliance in the case of US investors. However, steep discount to NAV also meant that GBTC shareholders are likely to be in the state of panic or fear. With recent attacks towards the Grayscale management, such added variable to the already volatile Bitcoin price movement may increase the risk for new investors to Bitcoin and cryptocurrencies.'

    ],
    isShow: true
  },
  {
    title: 'How to choose between GBTC and spot Bitcoin?',
    contentList: [
      'As all GBTC does is holding Bitcoin via trust on behalf of the investors, GBTC can actually be considered a <a href="/learn/articles/how-to-choose-derivatives-that-suit-you/26">derivative</a> of Bitcoin. In saying so, the value of GBTC shares is derived from the NAV of the Bitcoins held, and comes without any intrinsic value of its own. GBTC shares are therefore vulnerable to market sentiment and risks, and is very much prone to supply and demand factors on top of spot Bitcoin price. This can pose more difficulties to investors as far as share valuation is concerned.'
    ],
    isShow: false
  },
  {
    title: 'How to buy Bitcoin if it is decided that spot Bitcoin would be more appropriate?',
    contentList: [
      `You can buy Bitcoin by trading on the spot market via Gate.io, all you have to do is follow the steps on <a href="/how-to-buy/bitcoin-btc">how to buy BTC</a> once you have funded your account.`
    ],
    isShow: false
  },
  {
    title: 'What is the price prediction of Bitcoin (BTC) in the future?',
    contentList: [
      `Investors tend to rely on <a href="learn/articles/what-is-fundamental-wnalysis/27">fundamental analysis</a> and <a href="/learn/articles/what-is-technical-analysis/25">technical analysis</a> in trying to predict the future price of Bitcoin. On this point, the <a href="/price-prediction/bitcoin-btc">BTC price prediction</a> may be helpful in your decision making process before making any investment decisions.`
    ],
    isShow: false
  },
]




const FAQS: React.FC<FAQSProps> = function ({
  title = initialFAQTitle,
  FaqList = initialFaqList,
  isDark = false,
  id = 'test'
}) {

  const [data, setData] = useState(FaqList)
  const [hasHeader, setHasHeader] = useState(false)


  const StructuredData = () => {
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FaqList.map(item => {
        return {
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `<p>${item.contentList.map(context=>context)}</p>`
          }
        }
      })
    }
    const scripts = createPortal(
      // todo 删除 @ts-ignore
      // @ts-ignore
      <>
        <script type="application/ld+json" id="faq-data">
          {JSON.stringify(faq)}
        </script>
      </>, document.head
    )
    return <div>{!document.querySelector('#faq-data') && scripts}</div>
  }
  //
  useEffect(()=>{
    setTimeout(() => {
      window.$(function () {
        if(document.head) {
          setHasHeader(true)
        }
      });
    }, 300)
  }, [])

  // 点击展开卡片
  const handleClick = (idx) => {
    let list = data
    if (list[idx]) {
      list[idx] = { ...list[idx], ...{ isShow: !list[idx]?.isShow } }
    }
    setData([...list])
  }

  return (
    // todo 删除 @ts-ignore
    // @ts-ignore
    <>
      <div className={'FAQ'} id={id}>
        <SectionTitle title={title}/>
        <div className="FAQ-box">
          {
            data.map((item, idx) =>
              <div className={'FAQ-content'} key={item.title}>
                <h3 className={`FAQ-content-dis ${window.g_lang === 'ar' ? 'FAQs-content-disAr' : ''}`} onClick={() => handleClick(idx)}>
                  {item.title}
                  {
                    isDark ?
                      <span className="FAQ-content-dis-up">
										{item.isShow ? (
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 10L8 5L13 10" stroke="#3366FF" strokeWidth="2" strokeLinecap="square"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_380_6913)">
                          <path d="M3 6L8 11L13 6" stroke="white" strokeWidth="3" strokeLinecap="square"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_380_6913">
                            <rect width="16" height="16" fill="white" transform="matrix(-5.50037e-08 1 1 3.47374e-08 0 0)"/>
                          </clipPath>
                        </defs>
                      </svg>

                    )}
									</span>
                      :
                      <span className="FAQ-content-dis-dark_up">
										{
                      item.isShow? (
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 10L8 5L13 10" stroke="#3366FF" strokeWidth="2" strokeLinecap="square"/>
                        </svg>
                      ) : (
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3L8 8L13 3" stroke="#04091A" strokeWidth="3" strokeLinecap="square"/>
                        </svg>

                      )
                    }
									</span>
                  }


                </h3>
                <p className={'FAQ-content-ex'} style={item.isShow ? { display: 'block' } : { display: 'none' }}>
                  {item.contentList.map((context, index)=>{
                    return <p className="FAQ-content-ex-item" key={item.title+index}>{context}</p>
                  })}
                </p>
                {
                  idx < data.length - 1 && <div className={'FAQ-content-dis-border'}>
                  </div>
                }
              </div>
            )
          }
        </div>

      </div>
      {hasHeader && <StructuredData/>}
    </>
  )

  // return (
  //   <div >gate button 2023年05月05日18:12:13</div>
  // );
};


// FAQS.displayName = 'FAQS';

export default FAQS;
