import './TabButton.css';
export default function TabButton({ onClick, isActive, children }) {
    return (
        <button onClick={onClick} className={isActive ? 'active' : undefined}>{children}</button>
    );
}
