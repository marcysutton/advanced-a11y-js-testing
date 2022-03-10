import React, {useRef} from 'react'
import './styles.scss'
import Dropdown from './components/Dropdown'
import logoImage from './images/health-services-logo.png'

export function App() {
	const headerRef = useRef()
	const mainRef = useRef()

	const hideHeader = () => {
		headerRef.current.remove()

		mainRef.current.focus()
	}
	return <>
		<header id="global-header" ref={headerRef}>
			<div>
				<h1 className="header-header">Northwest Heart and Soul Institute</h1>
				<button aria-label="Hide header" className="header-button" onClick={()=>{ hideHeader() }}>
					X
				</button>
			</div>
		</header>
		<main id="main" data-testid="main" ref={mainRef} tabIndex="-1">
			<section className="section">
				<header>
					<h2>Make a Payment</h2>
					<div className="stepper">
						<ol aria-label="progress">
							<li className="inactive" aria-label="Step 1"><span></span></li>
							<li className="inactive" aria-label="Step 2"><span></span></li>
							<li aria-label="Step 3" aria-current="step"><span>3</span></li>
						</ol>
					</div>
				</header>
				<article>
					<h3>Take a moment to review your payment</h3>
					<p>Your total payment: $60.00 <a href="#" aria-label="Change amount" className="toggle">Change</a></p>

					<Dropdown buttonName="Details">
						<h4>Visit Summmary</h4>
						<table border="0" cellSpacing="2" cellPadding="0" summary="list of charges for payment receipt">
							<tbody><tr>
								<th align="left">Patient</th>
								<th align="left">Date</th>
								<th align="left">Service</th>
								<th className="amountheader" align="right">Amount</th>
							</tr>
							<tr>
								<td>McCheddarton, Rainier</td>
								<td>10/18/2021</td>
								<td>99203 Office Visit/New</td>
								<td className="amountcolumn" align="right">$60.00</td>
							</tr>
							<tr className="topborder">
								<td></td>
								<td></td>
								<td style={{textAlign: "right"}} align="right">Subtotal:</td>
								<td style={{textAlign: "right"}} align="right">$60.00</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td style={{textAlign: "right"}} align="right">Sales Tax:</td>
								<td style={{textAlign: "right"}} align="right">$0.00</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td style={{textAlign: "right"}} align="right">Total:</td>
								<td style={{textAlign: "right"}} align="right">$60.00</td>
							</tr>
						</tbody></table>
					</Dropdown>

					<h3>Payment method</h3>
					<h4>Credit card <a href="#" aria-label="Change payment method" className="toggle">Change</a></h4>
					<div className="credit-card">
						<div className="number">
							<span className="asterisk">••••</span>
							<span className="asterisk">••••</span>
							<span className="asterisk">••••</span>
							<span>3958</span></div>
						<div className="exp">5/25</div>
						<div className="flex">
							<div className="name">Rainier McCheddarton</div>
							<div className="logo" role="img" aria-label="VISA"></div>
						</div>
					</div>

					<h4>Billing address</h4>
					<address>
						Rainier McCheddarton<br />
						7790 AZIMOUTH ST<br />
						BELLINGHAM, WA 98229
					</address>

					<div className="confirm">Confirm payment</div>
				</article>
			</section>
		</main>
		<footer id="footer">
			&copy; 2021 <a href="#" className="company-logo"><img src={logoImage} alt="Health Services" /></a>
		</footer>
	</>
}
