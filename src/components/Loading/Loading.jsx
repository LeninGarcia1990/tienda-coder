import { Spin } from 'antd';
import './Loading.css';
export default function Loading() {
    return (
        <div className="loading">
            <Spin size="large" />
        </div>

    );
}