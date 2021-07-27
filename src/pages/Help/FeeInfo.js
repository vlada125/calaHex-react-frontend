import React from 'react';
import HelpDiv from './Help.style';

const FeeInfo = () => {
  return (
    <HelpDiv>
      <h2 className="text-center text-header">CALAHEX: Fee Info</h2>
      <p>Calahex has different fee structures for spot trading and futures trading. This section gives 
        a detailed description of the spot trading and general fees we charge as well as the trading
        volumes and verification levels we have established for all users of our platform.
        When an order executes the buyer and the seller are each charged a fee based on the total
        price of the executed order. The fee charged by Calahex on each executed trade is 
        calculated by taking the <b>(amount * purchase price * rate)</b> for the given trade. There are 
        no fees for placing an order which does not execute.<br />
        Fees vary by the currency pair being traded, your verification level, your 30-Day volume as 
        a trader and whether the order filled is a maker or taker.</p>
      <h4>Verification Levels</h4>

      <table>
        <tbody>
          <tr>
            <td className="text-center">Level 1</td>
            <td>Email verification</td>
          </tr>
          <tr>
            <td className="text-center">Level 2</td>
            <td>ID verification (Region, Name, Birthday, Address, City, Postal Code, Phone
              Number)</td>
          </tr>
          <tr>
            <td className="text-center">Level 3</td>
            <td>2FA Authentication (16-digit key Code)</td>
          </tr>
          <tr>
            <td className="text-center">Level 4</td>
            <td>Video verification (Video call with platform supporter with ID card or Passport</td>
          </tr>
        </tbody>
      </table>

      <h4>30-Day Volume</h4>
      <p>Your trading volume impacts the price you pay for each trade. Our fees are built to reward
        users who drive liquidity to Calahex markets to ensure a healthy ecosystem. Cumulative 
        30-day trading volume and average 24-hour holdings are automatically calculated daily at 
        00:00(UTC). 
        User level and fee rates are updated daily at 02:00 (UTC) to correspond with the fee
        schedule in the table below. </p>
      <h4>Maker Orders</h4>
      <p>Maker orders create (make) liquidity on a market by being entered onto the order book. In
        other words, maker orders are not filled when they are placed but instead wait until a 
        future order is placed that matches them. A maker order can be on either the sell side or a 
        buy side of the order. When an existing order on the order book is matched with a newly 
        placed order (the taker), the maker order in the transaction is charged the maker fee.</p>
      <h4>Taker Orders</h4>
      <p>Taker orders reduce (take away) liquidity on a market. Orders which execute immediately 
        and take volume off the order book are takers. A taker order can be on either the sell side 
        or buy side of the order. When a new order is placed and it matches against another order 
        already on the order book (the maker), the taker in the transaction is charged the taker fee.</p>
      <h4>Spot Trading Fee Schedule – January 2021</h4>
      
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>30-Day Volume (USD)</th>
            <th>Maker Fee</th>
            <th>Taker Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$0K-$50K</td>
            <td>0.12%</td>
            <td>0.12%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$50K-$1M</td>
            <td>0.10%</td>
            <td>0.12%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$1M-10M</td>
            <td>0.08%</td>
            <td>0.10%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>$10+</td>
            <td>0.05%</td>
            <td>0.08%</td>
          </tr>
        </tbody>
      </table>

      <h4>Minimal order requirements</h4>
      <p>The minimum order size is 25 USD/EUR for <b>USDT</b> denominated trading pairs and 0.02 
        ETH for <b>ETH</b> denominated trading pairs.</p>
      <h4>General Fee Schedule – January 2021</h4>

      <table>
        <thead>
          <tr>
            <th> Name and Symbol</th>
            <th>Deposit fee</th>
            <th>Withdrawal fee</th>
            <th>Transfer fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin BTC</td>
            <td>No fee</td>
            <td>0.0003 BTC</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Ethereum ETH</td>
            <td>No fee</td>
            <td>0.015 ETH</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>XRP XRP</td>
            <td>No fee</td>
            <td>8 XRP</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Tether USDT</td>
            <td>No fee</td>
            <td>2 USDT</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Bitcoin Cash BCH</td>
            <td>No fee</td>
            <td>0.02 BCH</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Litecoin LTC</td>
            <td>No fee</td>
            <td>0.06 LTC</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Chainlink LINK</td>
            <td>No fee</td>
            <td>0.5 LINK</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Cardano ADA</td>
            <td>No fee</td>
            <td>10 ADA</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Polkadot DOT</td>
            <td>No fee</td>
            <td>1 DOT</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Stellar XLM</td>
            <td>No fee</td>
            <td>10 XML</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>EOS EOS</td>
            <td>No fee</td>
            <td>1 EOS</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Monero XMR</td>
            <td>No fee</td>
            <td>0.03 XMR</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Tezos XTZ</td>
            <td>No fee</td>
            <td>1 XTZ</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Neo NEO</td>
            <td>No fee</td>
            <td>0.30 NEO</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>VeChain VET</td>
            <td>No fee</td>
            <td>10 VET</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Cosmos ATOM</td>
            <td>No fee</td>
            <td>1 ATOM</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Dash DASH</td>
            <td>No fee</td>
            <td>0.03 DASH</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>IOTA MIOTA</td>
            <td>No fee</td>
            <td>10 MIOTA</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Zilliqa ZIL</td>
            <td>No fee</td>
            <td>10 ZIL</td>
            <td>0.01% (amount)</td>
          </tr>

          <tr>
            <td>Tron TXR</td>
            <td>No fee</td>
            <td>001 TRX</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Dogecoin DOGE</td>
            <td>No fee</td>
            <td>20 DOGE</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Zcash ZEC</td>
            <td>No fee</td>
            <td>0.001 ZEC</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Ethereum Classic ETC</td>
            <td>No fee</td>
            <td>0.03 ETC</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Qtum QTUM</td>
            <td>No fee</td>
            <td>0.01 QTM</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Steem STEEM</td>
            <td>No fee</td>
            <td>1 STEEM</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Lisk LSK</td>
            <td>No fee</td>
            <td>0.1 LSK</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Basic Attention Token BAT</td>
            <td>No fee</td>
            <td>1 BAT</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Matic Network MATIC</td>
            <td>No fee</td>
            <td>150 MATIC</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Holo HOT</td>
            <td>No fee</td>
            <td>1 HOLO</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>NEM XEM</td>
            <td>No fee</td>
            <td>10 XEM</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Revain REV</td>
            <td>No fee</td>
            <td>10 REV</td>
            <td>0.01% (amount)</td>
          </tr>
          <tr>
            <td>Waves WAVES</td>
            <td>No fee</td>
            <td>0.3 WAVES</td>
            <td>0.01% (amount)</td>
          </tr>
        </tbody>
      </table>
      
      <h4>User accounts – January 2021</h4>
      <p>At Calahex we have set certain rules and pricing for the user accounts that we offer on our platform. Some accounts are free for all users and others are optional depending on level
verification. A one time fee will be charged to activate certain accounts</p>      
        <table>
        <thead>
          <tr>
            <td>User Account</td>
            <td>Type</td>
            <td>Price</td>
            <td>Level of Verification</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exchange Account</td>
            <td>Account for spot trading</td>
            <td>Free</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Futures Account</td>
            <td>Account for futures trading</td>
            <td>$20</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Savings Account</td>
            <td>Account for savings</td>
            <td>$20</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Pool Account</td>
            <td>Account for token mining or staking</td>
            <td>$20</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Margin Account</td>
            <td>Account for margin trading</td>
            <td>$100</td>
            <td>4</td>
          </tr>
          </tbody>
      </table>
      <p>Note: user accounts are not depended on 30-day volume, <u>only</u> on level verification.</p>
      <p>Calahex is an upcoming cool platform and suport from our community is a key ingredient 
        for our success. From time to time in our sole discretion we will increase and decrease 
        small margin spreads which are common practices in the financial industry, depending on 
        the market status of certain trading pairs. The objective is not only to keep us and traders 
        safe while they are trading on our platform but also fulfilling the need to satisfy traders that 
        are up for a challenge.</p>

    </HelpDiv>
  )
}

export default FeeInfo;