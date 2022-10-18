import { useEffect, useState } from "react";
import Dictaphone from "../../components";


const TestPage = () => {

    const [textAudioDictafone, setTextAudioDictafone] = useState('')
    const [textAreaChange, setTextareaChange] = useState('')
    const [isRecord, setRecord] = useState(false)
    const [newText, setNewText] = useState('')


    useEffect(() => {
        setNewText(textAudioDictafone)
    }, [isRecord, textAudioDictafone])

    const funTransferTextReviewtoParent = (text) => {
        setTextAudioDictafone(text);

    }
 
    const cildIsRecord = (booleanvalue) => {
        setRecord(booleanvalue)
    }


    return (<>
        <p className="title">
            TestPage
        </p>

        <textarea
            onChange={e => {
                const value = e.target.value
                setTextareaChange(value)
                setNewText('')
            }}
            className="textarea"
            value={textAreaChange + newText}
            disabled={isRecord}
        />

        <Dictaphone funTransferTextReviewtoParent={funTransferTextReviewtoParent} cildIsRecord={cildIsRecord} />
        {
            (textAudioDictafone.length > 0 || textAreaChange.length > 0) && (
              <div
                onClick={() => { setTextAudioDictafone(''); setNewText(''); setTextareaChange('')  }}
                className="button">
                Очистить все
              </div>)
          }

    </>);
}

export { TestPage }
