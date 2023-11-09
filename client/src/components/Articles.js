import { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Article from "./Article";
import InfiniteScroll from 'react-infinite-scroll-component';
function Articles(){
    const [news,setNews]=useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const dailyNews = async () => {
            const response = await getNews(page);
            console.log(new Set([...news, ...response.data]));
            setNews([...new Set([...news, ...response.data])]);
        }
        dailyNews();
    }, [page]);
    return (
        <InfiniteScroll style={{marginTop:"3rem"}}
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
        {news.map(dat=><Article 
            key={dat._id}
            author={dat.author}
            description={dat.description}
            link={dat.link}
            publisher={dat.publisher}
            timestamp={dat.timestamp}
            title={dat.title}
            url={dat.url}
             
            />)}
            
        </InfiniteScroll>
    )

}

export default Articles;