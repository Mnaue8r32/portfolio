import useI18n from '../../hooks/useI18n';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();
    const { t } = useI18n();

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p className="footer__copy">
                    © {year} Juan Manuel Cruz Beltran
                </p>
                <p className="footer__note">
                    {t.footer.notePrefix} <span className="footer__accent">{t.footer.noteAccent}</span>
                </p>
            </div>
        </footer>
    );
}
