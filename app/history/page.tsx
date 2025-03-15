import { HistoryBox } from "../components/historyBox/historyBox"
export default function History() {
    return(
        <div className="max-w-[500px] mx-auto w-full px-[20px] flex flex-col gap-[10px] mt-[30px]">
            <div className="text-[#DDDDDD] text-[16px]">Ваша история поиска:</div>
            <div className="flex flex-col gap-[10px]  overflow-y-auto pb-[110px]">{
                Array.from({length: 35}, (_, index) => (
                    <HistoryBox img="https://s3-alpha-sig.figma.com/img/cf30/bc8d/b0be4242116c53ba401676ad1c2e39db?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CNnMDVDrqBi7aTi~6YWIxk3Op5T9cTZVtiTfKP14WkRcnRwJosTbRUwzsi9kIxHbkf0r46Orqvhkk7f3diF1P~LGB5swNuE9Xnw0gOi5WALl52J-XqGc0fnSuxrw2sEfD3byZ5DzyjKYp8otIJFC~2yuSwct0gEpNgV4jg3N0~7Px3hHOhtbb03Z7tpHsCgvoZAQ4oEDSjEuVaac21yQKWh8Mq2zX5Gs7ElmDiM-1ik6ZyX10KQUGxDKGdHetfnv8IHtV83ueMv1pL-cnRqqKH2MxiBWxC6uWN9clYquTJU1ofD28vbgZ-3wRhktVxD46eyA7HLNkx6Z2A15HbqSgw__" info="только что" date="02.03.2025" name="Адреев Андрей" key={index} /> // Предполагая, что HistoryBox — это компонент
                ))
            }</div>
        </div>
    )
}