import { useState } from "react";
import { Search, Download, DollarSign, TrendingUp, CreditCard, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import { donations } from "@/data/mockData";

const Donations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDonations = donations.filter((donation) =>
    donation.donor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
  const completedAmount = donations
    .filter((d) => d.status === "completed")
    .reduce((sum, d) => sum + d.amount, 0);

  const columns = [
    {
      key: "donor",
      header: "Donor",
      render: (donation: typeof donations[0]) => (
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
            <DollarSign className="h-4 w-4 text-primary" />
          </div>
          <p className="font-medium text-foreground">{donation.donor}</p>
        </div>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      render: (donation: typeof donations[0]) => (
        <span className="font-semibold text-foreground">
          ${donation.amount.toLocaleString()}
        </span>
      ),
    },
    {
      key: "method",
      header: "Method",
      render: (donation: typeof donations[0]) => (
        <div className="flex items-center gap-2">
          {donation.method === "Credit Card" && <CreditCard className="h-4 w-4 text-muted-foreground" />}
          {donation.method === "Bank Transfer" && <Building2 className="h-4 w-4 text-muted-foreground" />}
          {donation.method === "PayPal" && <DollarSign className="h-4 w-4 text-muted-foreground" />}
          <span className="text-muted-foreground">{donation.method}</span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (donation: typeof donations[0]) => (
        <StatusBadge status={donation.status} />
      ),
    },
    {
      key: "date",
      header: "Date",
      render: (donation: typeof donations[0]) => (
        <span className="text-muted-foreground">
          {new Date(donation.date).toLocaleDateString()}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Donations</h1>
          <p className="text-muted-foreground">Track and manage donations</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Total Donations</p>
          </div>
          <p className="text-3xl font-bold text-foreground">${totalAmount.toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-emerald-500/20">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
          <p className="text-3xl font-bold text-foreground">${completedAmount.toLocaleString()}</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-amber-500/20">
              <CreditCard className="h-5 w-5 text-amber-500" />
            </div>
            <p className="text-sm text-muted-foreground">This Month</p>
          </div>
          <p className="text-3xl font-bold text-foreground">{donations.length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search donors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-secondary border-none"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All Methods
          </Button>
          <Button variant="outline" size="sm">
            Date Range
          </Button>
        </div>
      </div>

      {/* Table */}
      <DataTable data={filteredDonations} columns={columns} />
    </div>
  );
};

export default Donations;
