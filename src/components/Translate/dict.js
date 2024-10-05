import React from 'react';
import './dict.css';

const Dict = () => {
  return (
    <div id="dict" className='translate-container'>
      {/* <textarea className='input-text' placeholder='Enter text to translate...'></textarea>
      <button className='translate-button'>Translate</button> */}
      <div className='Dict_head'>
        <h2>Dictionary</h2>
      </div>
      <table>

      <tr>
          <th>Malvi</th>
          <th>Hindi</th>
        </tr>

        <tr>
   <td>के</td>
   <td>को</td>
</tr>
<tr>
   <td>की</td>
   <td>ओकी</td>
</tr>
<tr>
   <td>बातचीत</td>
   <td>बोलचाल</td>
</tr>
<tr>
   <td>विवाद</td>
   <td>लड़ाया</td>
</tr>
<tr>
   <td>वह</td>
   <td>उ</td>
</tr>
<tr>
   <td>आदमी</td>
   <td>लोग</td>
</tr>
<tr>
   <td>भला</td>
   <td>भलो</td>
</tr>
<tr>
   <td>है</td>
   <td>हे</td>
</tr>
<tr>
   <td>पर</td>
   <td>फेर</td>
</tr>
<tr>
   <td>बहुत</td>
   <td>बहोत</td>
</tr>
<tr>
   <td>करता</td>
   <td>करे</td>
</tr>
<tr>
   <td>का</td>
   <td>को</td>
</tr>
<tr>
   <td>फैलाने</td>
   <td>फेलबो</td>
</tr>
<tr>
   <td>वाले</td>
   <td>वालो</td>
</tr>
<tr>
   <td>खत्म</td>
   <td>खुट गयो</td>
</tr>
<tr>
   <td>होगी</td>
   <td>होगो</td>
</tr>

<tr>
   <td>लौटाने</td>
   <td>लोटाबो</td>
</tr>
<tr>
   <td>लेखक</td>
   <td>लिखबा वाला</td>
</tr>
<tr>
   <td>मैंने</td>
   <td>म्हारे</td>
</tr>
<tr>
   <td>पीछे</td>
   <td>पाछे</td>
</tr>
<tr>
   <td>ये</td>
   <td>यो</td>
</tr>
<tr>
   <td>चौंका</td>
   <td>चोको</td>
</tr>
<tr>
   <td>देगा</td>
   <td>देगो</td>
</tr>
<tr>
   <td>आपको</td>
   <td>तमारो</td>
</tr>

<tr>
    <td>गुजरात पर ध्यान केंद्रित किया</td>
    <td>गुजरात पे फोकस करयो</td>
</tr>
<tr>
    <td>दौरा करेंगे</td>
    <td>दोरो करेगा</td>
</tr>
<tr>
    <td>इल्ली लग गई थी</td>
    <td>इल्ली लागगीथी</td>
</tr>
<tr>
    <td>दवाई छिड़की</td>
    <td>दवाई छिडकी</td>
</tr>
<tr>
    <td>देखना</td>
    <td>देखबा</td>
</tr>
<tr>
    <td>काम करती है</td>
    <td>काम करे केनी</td>
</tr>
<tr>
    <td>कल</td>
    <td>काल</td>
</tr>
<tr>
    <td>बैलेंस</td>
    <td>बैलेंस</td>
</tr>
<tr>
    <td>खत्म</td>
    <td>खतम होग्यो</td>
</tr>
<tr>
    <td>कंपनी</td>
    <td>कंपनी वाला</td>
</tr>
<tr>
    <td>जमाना</td>
    <td>जमानो</td>
</tr>
<tr>
    <td>खराब</td>
    <td>ख़राब हे</td>
</tr>
<tr>
    <td>कुछ</td>
    <td>कई</td>
</tr>
<tr>
    <td>हो जाएगा</td>
    <td>होजा</td>
</tr>
<tr>
    <td>टॉपिक</td>
    <td>टॉपिक</td>
</tr>
<tr>
    <td>मेहनत</td>
    <td>मेनत</td>
</tr>
<tr>
    <td>लगन</td>
    <td>लगन</td>
</tr>
<tr>
    <td>कठिनाइयाँ</td>
    <td>कठिनाई</td>
</tr>
<tr>
    <td>पार कर लीं</td>
    <td>पार करली</td>
</tr>
<tr>
    <td>पुरस्कार</td>
    <td>पुरुस्कार</td>
</tr>
<tr>
    <td>सम्मेलन</td>
    <td>सम्मेलन</td>
</tr>
<tr>
    <td>योग</td>
    <td>योग</td>
</tr>
<tr>
    <td>तैयार हुआ</td>
    <td>तय्यार होयो</td>
</tr>
<tr>
    <td>नया</td>
    <td>नयो</td>
</tr>
<tr>
    <td>अच्छा</td>
    <td>अछो</td>
</tr>
<tr>
    <td>बड़ा</td>
    <td>बड़ो</td>
</tr>
<tr>
    <td>बगीचा</td>
    <td>बगीचों</td>
</tr>
<tr>
    <td>जगह</td>
    <td>जगह</td>
</tr>
<tr>
    <td>शांति</td>
    <td>शांति</td>
</tr>
<tr>
    <td>सुकून</td>
    <td>सुकून</td>
</tr>
<tr>
    <td>समस्या</td>
    <td>समस्या</td>
</tr>
<tr>
    <td>समाधान</td>
    <td>उपाव</td>
</tr>
<tr>
    <td>कोशिश</td>
    <td>कोशिश</td>
</tr>
<tr>
    <td>पूरा</td>
    <td>पूरा</td>
</tr>
<tr>
    <td>देखा</td>
    <td>देखबा</td>
</tr>
<tr>
    <td>फूल</td>
    <td>फूल</td>
</tr>
<tr>
    <td>फलियाँ</td>
    <td>फलिया</td>
</tr>
<tr>
    <td>महीने</td>
    <td>महीना</td>
</tr>
<tr>
    <td>तैयार</td>
    <td>तय्यार</td>
</tr>
<tr>
    <td>घर</td>
    <td>घर</td>
</tr>
<tr>
    <td>सामान</td>
    <td>समान</td>
</tr>
<tr>
    <td>बच्चे</td>
    <td>छोरा छोरी</td>
</tr>
<tr>
    <td>पढ़ाना</td>
    <td>पडाबो</td>
</tr>
<tr>
    <td>समझ</td>
    <td>तोल ताल</td>
</tr>
<tr>
    <td>कोरोना</td>
    <td>कोरोना</td>
</tr>
<tr>
    <td>समय</td>
    <td>टेम</td>
</tr>
<tr>
    <td>दवाइयाँ</td>
    <td>दवाया</td>
</tr>
<tr>
    <td>मिल</td>
    <td>मल</td>
</tr>
<tr>
    <td>काम</td>
    <td>काम</td>
</tr>
<tr>
    <td>बारिश</td>
    <td>बरसात</td>
</tr>

<tr>
    <td>रात</td>
    <td>राते</td>
  </tr>
  <tr>
    <td>जल्दी</td>
    <td>जल्दी</td>
  </tr>
  <tr>
    <td>सोना</td>
    <td>सोनो</td>
  </tr>
  <tr>
    <td>सुबह</td>
    <td>दनुवा</td>
  </tr>
  <tr>
    <td>उठना</td>
    <td>उठबा</td>
  </tr>
  <tr>
    <td>स्त्री</td>
    <td>स्त्री</td>
  </tr>
  <tr>
    <td>आज</td>
    <td>आज</td>
  </tr>
  <tr>
    <td>फॉर्म</td>
    <td>फारम</td>
  </tr>
  <tr>
    <td>भरना</td>
    <td>भरनो</td>
  </tr>
  <tr>
    <td>साइट</td>
    <td>साइट</td>
  </tr>
  <tr>
    <td>चल</td>
    <td>चल</td>
  </tr>
  <tr>
    <td>चारा</td>
    <td>चारो</td>
  </tr>
  <tr>
    <td>काटना</td>
    <td>काटके</td>
  </tr>
  <tr>
    <td>कुट्टी</td>
    <td>कुट्टी</td>
  </tr>
  <tr>
    <td>डालना</td>
    <td>पटकनी</td>
  </tr>
  <tr>
    <td>घड़ी</td>
    <td>घड़ी</td>
  </tr>
  <tr>
    <td>सेलेक्ट</td>
    <td>सेलेक्ट</td>
  </tr>
  <tr>
    <td>भाई</td>
    <td>भाई</td>
  </tr>
  <tr>
    <td>आर्मी</td>
    <td>आर्मी</td>
  </tr>
  <tr>
    <td>रक्षा</td>
    <td>रक्षा</td>
  </tr>
  <tr>
    <td>शादी</td>
    <td>सगाई</td>
  </tr>
  <tr>
    <td>भाव</td>
    <td>भाव</td>
  </tr>
  <tr>
    <td>सब्जी</td>
    <td>शाग</td>
  </tr>
  <tr>
    <td>आलू</td>
    <td>आलू</td>
  </tr>
  <tr>
    <td>रोटी</td>
    <td>रोटी</td>
  </tr>
  <tr>
    <td>चाय</td>
    <td>चाय</td>
  </tr>
  <tr>
    <td>प्याज</td>
    <td>प्याज</td>
  </tr>
  <tr>
    <td>स्वाद</td>
    <td>स्वाद</td>
  </tr>
  <tr>
    <td>हल्दी</td>
    <td>हलदी</td>
  </tr>
  <tr>
    <td>जीरा</td>
    <td>जीरो</td>
  </tr>
  <tr>
    <td>मसाले</td>
    <td>मसालो</td>
  </tr>
  <tr>
    <td>गिलास</td>
    <td>गिलास</td>
  </tr>
  <tr>
    <td>पानी</td>
    <td>पानी</td>
  </tr>
  <tr>
    <td>सेहत</td>
    <td>सेहत</td>
  </tr>
  <tr>
    <td>संतुलित</td>
    <td>संतुलित</td>
  </tr>
  <tr>
    <td>आहार</td>
    <td>आहार</td>
  </tr>
  <tr>
    <td>व्यायाम</td>
    <td>व्यायाम</td>
  </tr>
  <tr>
    <td>शरीर</td>
    <td>शरीर</td>
  </tr>
  <tr>
    <td>स्वस्थ</td>
    <td>स्वस्थ</td>
  </tr>
  <tr>
    <td>मासपेशियाँ</td>
    <td>मासपेशियाँ</td>
  </tr>
  <tr>
    <td>मजबूत</td>
    <td>मजबूत</td>
  </tr>
  <tr>
    <td>विवाह</td>
    <td>शादी</td>
  </tr>
  <tr>
    <td>अच्छा</td>
    <td>अच्छो</td>
  </tr>
  <tr>
    <td>किसान</td>
    <td>कर्षाण</td>
  </tr>
  <tr>
    <td>फसल</td>
    <td>फसल</td>
  </tr>
  <tr>
    <td>परीक्षा</td>
    <td>परीक्शा</td>
  </tr>
  <tr>
    <td>तैयारी</td>
    <td>तैयारी</td>
  </tr>
  <tr>
    <td>सवाल</td>
    <td>सवाल</td>
  </tr>
  <tr>
    <td>जवाब</td>
    <td>जवाब</td>
  </tr>
  <tr>
    <td>गुरुजी</td>
    <td>गुरुजी</td>
  </tr>
  <tr>
    <td>नंबर</td>
    <td>नंबर</td>
  </tr>
  <tr>
    <td>खुश</td>
    <td>खुश</td>
  </tr>
  <tr>
    <td>उदास</td>
    <td>उदास</td>
  </tr>
  <tr>
    <td>परिणाम</td>
    <td>रिजल्ट</td>
  </tr>
  <tr>
    <td>रिश्तेदार</td>
    <td>रिश्तेदार</td>
  </tr>
  <tr>
    <td>योग</td>
    <td>योग</td>
  </tr>
  <tr>
    <td>फल</td>
    <td>फल</td>
  </tr>
  <tr>
    <td>सब्जियाँ</td>
    <td>सब्जिया</td>
  </tr>



        </table>
    </div>
  );
}

export default Dict;
