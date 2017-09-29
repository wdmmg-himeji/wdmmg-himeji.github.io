/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

//OpenSpending.identifier = 'wdmmg_himejihyogo_2014_budget'; //OpenSpendingにupしたcsvファイルのidentifier
//OpenSpending.year = '2014'; //登録したcsvのyear

OpenSpending.identifier = 'himeji_hyogo_2017_budget'; //OpenSpendingにupしたcsvファイルのidentifier
OpenSpending.year = '2017'; //登録したcsvのyear

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* himeji cofog */
  '1': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-1': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-2': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#0AB971' },
  '2': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-1': { icon: 'icons/wheelchair.svg', color: '#C75746', bcolor: '#0AB971' },
  '2-2': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#4E6D00' },
  '2-3': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#4E6D00' },
  '3-1': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#4E6D00' },
  '4': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' },
  '4-1': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#D33673' },
  '5': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#D33673' },
  '5-1': { icon: 'icons/construction2.svg', color: '#C75746', bcolor: '#D33673' },
  '5-2': { icon: 'icons/c_shyoubou.svg', color: '#C75746', bcolor: '#2A3A03' },
  '6': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#EC2406' },
  '6-1': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#EC2406' },
  '7': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#938626' },
  '7-1': { icon: 'icons/economic-aid.svg', color: '#C75746', bcolor: '#938626' },
  '8': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#C75746' },
  '8-1': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#C75746' },
  '8-2': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#C75746' },
};
