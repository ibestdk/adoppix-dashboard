import { useState } from "react";
import { getAllQA } from "../../services/qa.service";
import { useEffect } from "react";
import { QAItem } from "./qaItem";
export const QA = () => {
  const [qas, setQAs] = useState([]);

  useEffect(() => {
    fetchQAs();
  }, []);

  const fetchQAs = async () => {
    const qas = await getAllQA();
    if (qas.status) {
      setQAs(qas.data);
    }
  }

  return (
    <div className="mx-4 mt-10 w-full">
      <h1 className="font-semibold text-2xl">จัดการถาม - ตอบ</h1>
      <div className="flex flex-wrap p-2 py-6 mb-5">
        { qas ? (
          qas.map((qa, index) => (
            <QAItem qa={qa} key={index}/>
          ))
        ) : (
          <div>

          </div>
        )}
      </div>
    </div>
  );
};
