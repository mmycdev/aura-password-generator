import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return <main className={styles.container}>{children}</main>;
}

export default MainLayout;
