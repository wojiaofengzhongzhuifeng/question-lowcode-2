import React, {useEffect, useState} from "react";
import {Button, Input, Switch} from "@alifd/next";
import {FAQItemProps} from "../../components/FAQs";

interface FAQSetterProps {
  // 当前值
  value:  FAQItemProps[];
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  onChange: (val: FAQItemProps[]) => void;
  // AltStringSetter 特殊配置
  placeholder: string;
}

const FAQInputSetter: React.FC<FAQSetterProps> = ({
  onChange,
  value,
  defaultValue,
  placeholder,
})=>{

  console.log('defaultValue', defaultValue, );
  console.log('value', value);
  const [faqList, setFaqList] = useState(value)
  const [mounted, setMounted] = useState(false)

  const handleAddFAQItem = ()=>{
    setFaqList([...faqList, {title: "", isShow: false, contentList: ['']}])
    // setTimeout(()=>{
    //   console.log('faqList', faqList);
    //   onChange(faqList) // todo 测试代码 需要删除
    //
    // }, 3000)
  }

  useEffect(()=>{
    if(value && !mounted){
      setMounted(true)
      setFaqList(value)
    }
  }, [value])

  useEffect(()=>{



    if(faqList){
      console.log('faqList onchange', faqList);
      onChange(faqList)
    }

  }, [faqList])

  const handleInputTitle = (newTitle: string, index1: number)=>{
    let newFaqList = faqList.map((faqItem, index2)=>{
      if(index2 === index1){
        return  {...faqItem, title: newTitle}
      } else {
        return {...faqItem}
      }
    })
    setFaqList(newFaqList)
  }

  const handleInputContentDesc = (newDesc: string, index1: number, index2: number)=>{
    let newFaqList = faqList.map((faqItem, index11)=>{
      if(index11 === index1){



        let newContentList =  faqItem.contentList.map((desc, index22)=>{
          if(index22 === index2){
            return newDesc
          } else {
            return desc
          }
        })

        return {...faqItem, contentList: newContentList}


      } else {
        return {...faqItem}
      }
    })


    setFaqList(newFaqList)

  }

  const handleAddFAQItemDes = (index1)=>{
    let newFaqList = faqList.map((faqItem, index11)=>{
      if(index11 === index1){
        let newContentList =  [...faqItem.contentList, '']
        return {...faqItem, contentList: newContentList}
      } else {
        return {...faqItem}
      }
    })
    setFaqList(newFaqList)
  }

  const handleChangeVisible = (newStatus, index1)=>{
    let newFaqList = faqList.map((faqItem, index11)=>{
      if(index11 === index1){
        return {...faqItem, isShow: newStatus}
      } else {
        return {...faqItem}
      }
    })
    setFaqList(newFaqList)
  }

  return (
    <div>

      {
        faqList?.map((faqItem, index1)=>{
          return (
            <div style={{ margin: '10px 0'}} key={index1}>
              <div >
                faqTitle: <Input  key={index1} value={faqItem.title} onChange={(newTitle)=>{handleInputTitle(newTitle, index1)}}/>
              </div>

              <div >

                contentList: {faqItem.contentList.map((content, index2)=>{
                  return <Input key={`${index1}-${index2}`} value={content} onChange={(newDesc)=>{handleInputContentDesc(newDesc, index1, index2)}}/>
                // return content
              })}

              <Button onClick={()=>{handleAddFAQItemDes(index1)}}>添加 faq 内容 </Button>
              </div>

              <div >
                isShow: <Switch checked={faqItem.isShow} onChange={(newStatus)=>{handleChangeVisible(newStatus, index1)}}/>
              </div>
            </div>
          )
        })
      }

      <Button onClick={handleAddFAQItem}>添加faq item</Button>
    </div>
  )
}

export default FAQInputSetter
