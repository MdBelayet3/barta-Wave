import { CiCalendar } from "react-icons/ci";

const NewsCard = ({ news }) => {
    const date = news?.author?.published_date;
    return (
        <>
            <a href={`/category/${news?.category_id}`}>
                <div className="space-y-5 shadow-xl p-3 border-2 rounded-md mt-4">
                    <img className="rounded-lg" src={news?.image_url} alt="" />
                    <h2 className="text-[#403F3F] text-xl font-semibold">{news?.title}</h2>
                    <div className="space-y-3">
                        <h5 className="font-medium">Category: {news?.category_name}</h5>
                        <span className="flex items-center gap-4">
                            <CiCalendar />
                            <p className="font-medium text-[#9F9F9F]">{date}</p>
                        </span>
                    </div>
                </div>
            </a>
        </>
    );
};

export default NewsCard;
