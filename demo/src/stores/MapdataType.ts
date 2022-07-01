export interface Root {
	diseaseh5Shelf: RootDiseaseh5Shelf;
	statisGradeCityDetail: RootStatisGradeCityDetail[];
}
export interface RootDiseaseh5ShelfShowAddSwitch {
	confirm: boolean;
	dead: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	noInfect: boolean;
	localinfeciton: boolean;
	all: boolean;
	heal: boolean;
	importedCase: boolean;
	localConfirm: boolean;
	suspect: boolean;
}
export interface RootDiseaseh5ShelfAreaTreeToday {
	isUpdated: boolean;
	confirm: number;
}
export interface RootDiseaseh5ShelfAreaTreeTotal {
	nowConfirm: number;
	showHeal: boolean;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	dead: number;
	showRate: boolean;
	continueDayZeroLocalConfirm: number;
	confirm: number;
	heal: number;
	wzz: number;
	mtime: string;
	adcode: string;
}
export interface RootDiseaseh5ShelfAreaTreeChildrenToday {
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
}
export interface RootDiseaseh5ShelfAreaTreeChildrenTotal {
	wzz: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	dead: number;
	heal: number;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	showRate: boolean;
	mtime: string;
	adcode: string;
	nowConfirm: number;
	confirm: number;
	showHeal: boolean;
	continueDayZeroConfirmAdd: number;
	continueDayZeroConfirm: number;
}
export interface RootDiseaseh5ShelfAreaTreeChildrenChildrenToday {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}
export interface RootDiseaseh5ShelfAreaTreeChildrenChildrenTotal {
	adcode: string;
	confirm: number;
	wzz: number;
	continueDayZeroLocalConfirm: number;
	mtime: string;
	nowConfirm: number;
	showHeal: boolean;
	heal: number;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	dead: number;
	showRate: boolean;
	continueDayZeroLocalConfirmAdd: number;
}
export interface RootDiseaseh5ShelfAreaTreeChildrenChildren {
	today: RootDiseaseh5ShelfAreaTreeChildrenChildrenToday;
	total: RootDiseaseh5ShelfAreaTreeChildrenChildrenTotal;
	name: string;
	adcode: string;
	date: string;
}
export interface RootDiseaseh5ShelfAreaTreeChildren {
	today: RootDiseaseh5ShelfAreaTreeChildrenToday;
	total: RootDiseaseh5ShelfAreaTreeChildrenTotal;
	children: RootDiseaseh5ShelfAreaTreeChildrenChildren[];
	name: string;
	adcode: string;
	date: string;
}
export interface RootDiseaseh5ShelfAreaTree {
	name: string;
	today: RootDiseaseh5ShelfAreaTreeToday;
	total: RootDiseaseh5ShelfAreaTreeTotal;
	children: RootDiseaseh5ShelfAreaTreeChildren[];
}
export interface RootDiseaseh5ShelfChinaTotal {
	localConfirmAdd: number;
	mRiskTime: string;
	noInfect: number;
	showlocalinfeciton: number;
	localConfirmH5: number;
	showLocalConfirm: number;
	local_acc_confirm: number;
	nowConfirm: number;
	confirm: number;
	dead: number;
	suspect: number;
	mtime: string;
	mediumRiskAreaNum: number;
	localConfirm: number;
	heal: number;
	nowSevere: number;
	deadAdd: number;
	confirmAdd: number;
	nowLocalWzz: number;
	highRiskAreaNum: number;
	importedCase: number;
	noInfectH5: number;
	localWzzAdd: number;
}
export interface RootDiseaseh5ShelfChinaAdd {
	importedCase: number;
	noInfect: number;
	localConfirm: number;
	confirm: number;
	dead: number;
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	noInfectH5: number;
	localConfirmH5: number;
	heal: number;
}
export interface RootDiseaseh5Shelf {
	isShowAdd: boolean;
	showAddSwitch: RootDiseaseh5ShelfShowAddSwitch;
	areaTree: RootDiseaseh5ShelfAreaTree[];
	lastUpdateTime: string;
	chinaTotal: RootDiseaseh5ShelfChinaTotal;
	chinaAdd: RootDiseaseh5ShelfChinaAdd;
}
export interface RootStatisGradeCityDetail {
	confirm: number;
	dead: number;
	syear: number;
	wzz_add: string;
	heal: number;
	grade: string;
	date: string;
	mtime: string;
	province: string;
	city: string;
	nowConfirm: number;
	confirmAdd: number;
	sdate: string;
}