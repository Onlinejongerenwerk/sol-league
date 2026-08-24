"use client";
import Link from "next/link";
import {useState} from "react";
import {navigation} from "../lib/content";
import {Icon} from "./icons";
export function MobileNav(){const[open,setOpen]=useState(false);return <div className="mobile-menu"><button className="menu-toggle" type="button" aria-label={open?"Menu sluiten":"Menu openen"} aria-expanded={open} onClick={()=>setOpen(!open)}><Icon name="menu"/></button>{open&&<div className="mobile-links" style={{position:"absolute",top:"81px",left:0,right:0,paddingInline:"16px",background:"#0d0b14",borderBottom:"1px solid rgba(255,255,255,.12)"}}>{navigation.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</Link>)}<Link href="/aanmelden" className="button button-primary" onClick={()=>setOpen(false)}>MELD JE AAN <Icon name="arrow" size={17}/></Link></div>}</div>}
