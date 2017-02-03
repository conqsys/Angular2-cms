import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitModel } from '../../shared/model/unit.model';
import { LeaseModel } from '../../shared/model/Lease.model';
import { UnitService } from '../unit.service';

@Component({
	selector: 'unit-detail',
	templateUrl: 'unit-detail.component.html'
})
export class UnitDetailComponent implements OnInit {
	private Id: number;
	private unit: UnitModel = new UnitModel();
	private leases: LeaseModel[] = [];
	constructor(private route: ActivatedRoute,
		private router: Router,
		public unitService: UnitService) {

		this.Id = this.route.params['value'].Id;
		this.getUnit();
	}
	ngOnInit() {
	}

	getUnit() {
		this.unitService.getUnitDetail(this.Id).then(result => {
			console.log('Unit By Unit ID Is')
			console.log(result);
			this.getLeaseByUnit();
			this.unit = result;
		});
	}

	getLeaseByUnit() {
		this.unitService.getLeases(this.Id).then(result => {
			console.log('Unit By Unit ID Is')
			console.log(result);
			this.leases = result;
		});

	}
}