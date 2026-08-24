import Link from "next/link";
import {navigation} from "../lib/content";
import {Icon} from "./icons";
import {MobileNav} from "./mobile-nav";
export function SiteHeader(){return <header className="header"><div className="sol-ribbon" aria-hidden="true"/><div className="shell header-inner"><Link href="/" className="wordmark" aria-label="Game & Talent League: terug naar home"><span>GAME <strong>&</strong> TALENT</span><span>LEAGUE<strong>.</strong></span><small>EEN INITIATIEF VAN SOL</small></Link><nav className="nav" aria-label="Hoofdnavigatie">{navigation.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/aanmelden" className="button button-primary button-small">AANMELDEN <Icon name="arrow" size={16}/></Link></nav><MobileNav/></div></header>}
