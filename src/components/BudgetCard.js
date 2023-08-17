import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import { currencyFormatter } from "../utils"
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell,Tooltip } from 'recharts';
export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) {
  const classNames = []
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10")
  } else if (gray) {
    classNames.push("bg-light")
  }

  const pieChartData = [
    { name: 'Spent', value: amount },
    { name: 'Remaining', value: Math.max(max - amount, 0) },
  ];

  const getSegmentColor = (index) => {
    if (index === 0) {
      if (amount > max) {
        return '#dc3545'; // Exceeded max amount, show red color
      } else {
        const ratio = amount / max;
        if (ratio < 0.5) return '#0d6efd';
        if (ratio < 0.75) return '#ffc107';

        return '#82ca9d'; // Default color for "Spent" segment
      }
    } else if (index === 1) {
      return '#198754'; // Set "Remaining" segment to green
    }
    return 'gray'; // For any other segment, you can set a default color
  };
  

  const COLORS = pieChartData.map((_, index) => getSegmentColor(index));


  return (
    <div className="entire-container d-flex flex-column justify-content-center align-items-between">
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button onClick={onViewExpensesClick} variant="outline-secondary">
              View Expenses
            </Button>
          </Stack>
        )}
      </Card.Body>
      <div className="card-end ">
      <div className="chart">
      <PieChart width={100} height={100}>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                isAnimationActive={true}
                cy="50%"
                outerRadius={35}
                fill="#82ca9d"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
    </div>
      </div>
    </Card>
    
    
    </div>
  )
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max
  if (ratio < 0.5) return "primary"
  if (ratio < 0.75) return "warning"
  return "danger"
}
