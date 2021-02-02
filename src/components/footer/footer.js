import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.scss';
import contactItemsList from '../../data/contactItems.json';

export default function Footer() {

    return (
        <footer>
            <div className="footer-sentence">
                New challenges and learning
                    <FontAwesomeIcon className="icon" icon={["fas", "cogs"]} />
            </div>

            <div className="footer-line" />

            <div className="footer-networks">
                {
                    contactItemsList.map((item) =>

                        <div className="footer-item-networks" key={item.id.toString()}>

                            <div className="parent">
                                <div className="child">
                                    <a href={item.url} target="_blank" title={item.label}>
                                        <FontAwesomeIcon
                                            icon={[item.iconFamily, item.icon]}
                                            key={item.id} />
                                    </a>
                                </div>
                                <div className="child">
                                    <a href={item.url} target="_blank" title={item.label}>
                                        {item.text}
                                    </a>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>

            <div className="footer-copy">
                © 2021 Andres Pulido, Auckland New Zealand
                </div>

        </footer>
    )
}