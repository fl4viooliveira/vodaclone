import HeaderLayout from "./layout/HeaderLayout";
export default function Header() {
  return (
    <div>
      <HeaderLayout>
        <ul className="header-menu">
          <li>Shop</li>
          <li>Why Vodafone</li>
          <li>Help</li>
          <li>My Vodafone</li>
        </ul>
      </HeaderLayout>
    </div>
  );
}
