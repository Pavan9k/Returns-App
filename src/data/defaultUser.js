const getCurrentFinancialYear = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // JS months are 0-based
  if (month >= 4) {
    // April or later
    return `${year}-${year + 1}`;
  } else {
    // January to March
    return `${year - 1}-${year}`;
  }
};
const financialYearKey = getCurrentFinancialYear();

export const defaultUser = {
  id: null,
  financialYear: {
    [financialYearKey]: {
      refundDetails: {
        refundAmount: { text: "Refund Amount", value: 0 },
        refundStatus: { text: "Refund Status", value: "" },
        refundDate: { text: "Refund Date", value: "" },
      },
      filingDetails: {
        filingStatus: { text: "Filing Status", value: "" },
        acknowledgementNumber: { text: "Acknowledgement Number", value: "" },
        fillingDate: { text: "Filling Date", value: "" },
      },
      commissionDetails: {
        totalCommissionAmount: { text: "Total Commission Amount", value: 0 },
        commissionReceived: { text: "Commission Received", value: "" },
      },
      basicInformation: {
        name: { text: "Name", value: "" },
        PAN: { text: "Pan", value: "" },
        mobile: { text: "Mobile", value: "" },
        isCompleted: { text: "completed", value: false },
      },
      salaryIncome: {
        employerCategory: { text: "Employer Category", value: "" },
        grossSalary: { text: "Gross Salary", value: 0 },
        basicSalary: { text: "Basic Salary", value: 0 },
        hraReceived: { text: "Hra Received", value: 0 },
        rentPaid: { text: "Rent Paid", value: 0 },
        cityType: { text: "City Type", value: "" },
        otherAllowances: {
          allowance1: { text: "Allowance 1", value: 0 },
          allowance2: { text: "Allowance 2", value: 0 },
          allowance3: { text: "Allowance 3", value: 0 },
          allowance4: { text: "Allowance 4", value: 0 },
          allowance5: { text: "Allowance 5", value: 0 },
        },
        ProfessionalTaxPaid: { text: "Professional Tax Paid", value: 0 },
        standardDeduction: { text: "Standard Deduction", value: 0 },
        employerPfContribution: { text: "Employer Pf Contribution", value: 0 },
        employerNpsContribution: {
          text: "Employer Nps Contribution",
          value: 0,
        },
        GratuityLeaveEncashment: {
          text: "Gratuity Leave Encashment",
          value: 0,
        },
        isCompleted: { text: "Is Completed", value: false },
      },
      houseProperty: {
        hasHouseProperty: { text: "Has House Property", value: false },
        propertyType: { text: "Property Type", value: "" },
        addressOfProperty: { text: "Address Of Property", value: "" },
        ownerSharePercentage: { text: "Owner Share Percentage", value: 0 },
        annualRentReceived: { text: "Annual Rent Received", value: 0 },
        municipalTaxesPaid: { text: "Municipal Taxes Paid", value: 0 },
        homeLoanInterestSec24b: {
          text: "Home Loan Interest Sec 24b",
          value: 0,
        },
        principalAmount80C: { text: "Principal Amount 80 C", value: 0 },
        preConstructionInterest: {
          text: "Pre Construction Interest",
          value: 0,
        },
        isCompleted: { text: "Is Completed", value: false },
      },
      capitalGains: {
        isCompleted: { text: "Is Completed", value: false },
        equityOrMutualFunds: {
          longTermCapitalGain: { text: "Long Term Capital Gain", value: 0 },
          longTermCapitalLoss: { text: "Long Term Capital Loss", value: 0 },
          shortTermCapitalGain: { text: "Short Term Capital Gain", value: 0 },
          shortTermCapitalLoss: { text: "Short Term Capital Loss", value: 0 },
        },
        propertySale: {
          saleConsideration: { text: "Sale Consideration", value: 0 },
          purchaseValue: { text: "Purchase Value", value: 0 },
          yearOfPurchase: { text: "Year Of Purchase", value: 0 },
          indexedCost: { text: "Indexed Cost", value: 0 },
          stampDutyValue: { text: "Stamp Duty Value", value: 0 },
          improvementCost: { text: "Improvement Cost", value: 0 },
          brokerageTransferExpenses: {
            text: "Brokerage Transfer Expenses",
            value: 0,
          },
          exemptionClaimed: { text: "Exemption Claimed", value: 0 },
        },
        otherAssets: {
          gold: { text: "Gold", value: 0 },
          bonds: { text: "Bonds", value: 0 },
          debentures: { text: "Debentures", value: 0 },
          internationalStocks: { text: "International Stocks", value: 0 },
          cryptoBitcoinGains: { text: "Crypto Bitcoin Gains", value: 0 },
          cryptoLosses: { text: "Crypto Losses", value: 0 },
          winningGames: { text: "Winning Games", value: 0 },
        },
      },
      businessOrProfessionalIncome: {
        isCompleted: { text: "Is Completed", value: false },
        forBusiness: {
          natureOfBusiness: { text: "Nature Of Business", value: "" },
          turnover: { text: "Turnover", value: 0 },
          grossReceipts: { text: "Gross Receipts", value: 0 },
          expenses: {
            expense1: { text: "Expense 1", value: 0 },
            expense2: { text: "Expense 2", value: 0 },
            expense3: { text: "Expense 3", value: 0 },
            expense4: { text: "Expense 4", value: 0 },
            expense5: { text: "Expense 5", value: 0 },
          },
          netProfit: { text: "Net Profit", value: 0 },
          presumptiveIncome: { text: "Presumptive Income", value: 0 },
          bookProfit: { text: "Book Profit", value: 0 },
          depreciation: { text: "Depreciation", value: 0 },
          stockDetails: { text: "Stock Details", value: "" },
          gstNumberAndTurnover: { text: "Gst Number And Turnover", value: "" },
          tdsByClients: { text: "Tds By Clients", value: 0 },
        },
        balanceSheetDetails: {
          sundryDebtors: { text: "Sundry Debtors", value: 0 },
          sundryCreditors: { text: "Sundry Creditors", value: 0 },
          cashAndBankBalance: { text: "Cash And Bank Balance", value: 0 },
          loansAndAdvances: { text: "Loans And Advances", value: 0 },
          fixedAssets: { text: "Fixed Assets", value: 0 },
          loans: { text: "Loans", value: 0 },
        },
        freeLancingOrConsulting: {
          receipts: { text: "Receipts", value: 0 },
          expenses: { text: "Expenses", value: 0 },
          netTaxableIncome: { text: "Net Taxable Income", value: 0 },
        },
      },
      otherSources: {
        isCompleted: { text: "Is Completed", value: false },
        savingsBankInterest: { text: "Savings Bank Interest", value: 0 },
        fdInterest: { text: "Fd Interest", value: 0 },
        rdInterest: { text: "Rd Interest", value: 0 },
        bondInterest: { text: "Bond Interest", value: 0 },
        dividendIncome: { text: "Dividend Income", value: 0 },
        familyPension: { text: "Family Pension", value: 0 },
        incomeFromSubLetting: { text: "Income From Sub Letting", value: 0 },
        giftsReceivedAboveLimits: {
          text: "Gifts Received Above Limits",
          value: 0,
        },
        lotteryGamesOnlineFantasyIncome: {
          text: "Lottery Games Online Fantasy Income",
          value: 0,
        },
        raceHorsesIncome: { text: "Race Horses Income", value: 0 },
        bitcoinCryptoIncome: { text: "Bitcoin Crypto Income", value: 0 },
        otherTaxableCasualIncome: {
          text: "Other Taxable Casual Income",
          value: 0,
        },
      },
      exemptIncome: {
        isCompleted: { text: "Is Completed", value: false },
        pfMaturity: { text: "Pf Maturity", value: 0 },
        ppfInterest: { text: "Ppf Interest", value: 0 },
        agriculturalIncome: { text: "Agricultural Income", value: 0 },
        giftsFromRelatives: { text: "Gifts From Relatives", value: 0 },
        ltcTaxExempt: { text: "Ltc Tax Exempt", value: 0 },
        gratuity: { text: "Gratuity", value: 0 },
        leaveEncashment: { text: "Leave Encashment", value: 0 },
      },
    },
  },
};
