export default function TabButton({children, onSelect, isSelected}) {
    // console.log('tab component component executed');
    return  (
            <li>
                <button className={isSelected? 'active': null} onClick={onSelect}>{children}</button>
            </li>
        )
}