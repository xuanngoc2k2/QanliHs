import styles from './BarMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BarMenu({ data }) {
    return (
        <div className={cx('box-menu')}>
            <ul>
                {data.map((title, index) => {
                    return (
                        <li key={index}>
                            <a href='#'>{title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default BarMenu;